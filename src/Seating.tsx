import React, { useState, useEffect, useMemo } from 'react';
import './Seating.css';

interface SeatingData {
  name: string;
  tableNumber: string;
  mealChoice: string;
}

const Seating: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [seatingData, setSeatingData] = useState<SeatingData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSeatingData = async () => {
      try {
        // Load data from Google Sheets
        const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/1s5KTYmSj59qEJF8NerLRW9XU1Cv-CfNJE6dcdh9MQ6E/export?format=csv`;

        const response = await fetch(GOOGLE_SHEET_URL);
        if (!response.ok) {
          throw new Error('Could not load seating data from Google Sheets');
        }

        const csvText = await response.text();

        // Parse CSV more carefully to handle quoted values and dates
        const parseCSVLine = (line: string) => {
          const values = [];
          let current = '';
          let inQuotes = false;

          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
              values.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          values.push(current.trim());
          return values;
        };

        const lines = csvText.split('\n').filter(line => line.trim());
        const headers = parseCSVLine(lines[0]);

        const formattedData: SeatingData[] = lines.slice(1).map(line => {
          const values = parseCSVLine(line);
          const row: any = {};
          headers.forEach((header, index) => {
            row[header] = values[index] || '';
          });

          return {
            name: row.Name || row.name || '',
            tableNumber: (row['Table Number'] || row['table number'] || row.tableNumber || '').trim() || 'TBD',
            mealChoice: row['Meal Choice'] || row['meal choice'] || row.mealChoice || ''
          };
        }).filter(person => person.name); // Only include rows with names

        setSeatingData(formattedData);
      } catch (err) {
        setError('Failed to load seating data from Google Sheets.');
        console.error('Error loading seating data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSeatingData();
  }, []);

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return seatingData;

    return seatingData.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [seatingData, searchTerm]);

  if (loading) {
    return (
      <div className="seating-container">
        <div className="seating-content">
          <h1>Seating Assignments</h1>
          <div className="loading">Loading seating information...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="seating-container">
        <div className="seating-content">
          <h1>Seating Assignments</h1>
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="seating-container">
      <div className="seating-content">
        <h1>Seating Assignments</h1>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="results-section">
          {filteredData.length === 0 ? (
            <div className="no-results">
              {searchTerm ? 'No guests found matching your search.' : 'No seating data available.'}
            </div>
          ) : (
            <div className="results-grid">
              {filteredData.map((person, index) => (
                <div key={index} className="guest-card">
                  <h3 className="guest-name">{person.name}</h3>
                  <div className="guest-details">
                    <div className="detail-item">
                      <span className="detail-label">Table:</span>
                      <span className="detail-value table-number">{person.tableNumber}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Meal:</span>
                      <span className="detail-value">{person.mealChoice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Seating;