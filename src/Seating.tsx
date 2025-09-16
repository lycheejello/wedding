import React, { useState, useEffect, useMemo } from 'react';
import * as XLSX from 'xlsx';
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
        // Try to load XLSX file first
        let response = await fetch('/seating.xlsx');

        if (!response.ok) {
          // Fallback to sample JSON data for testing
          response = await fetch('/seating-sample.json');
          if (!response.ok) {
            throw new Error('Could not load seating data');
          }

          const jsonData = await response.json();
          const formattedData: SeatingData[] = jsonData.map((row: any) => ({
            name: row.name || row.Name || '',
            tableNumber: String(row['table number'] || row['Table Number'] || ''),
            mealChoice: row['meal choice'] || row['Meal Choice'] || row['meal choie'] || ''
          }));

          setSeatingData(formattedData);
          return;
        }

        // Process XLSX file
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet) as any[];

        const formattedData: SeatingData[] = jsonData.map(row => ({
          name: row.name || row.Name || '',
          tableNumber: String(row['table number'] || row['Table Number'] || ''),
          mealChoice: row['meal choice'] || row['Meal Choice'] || row['meal choie'] || ''
        }));

        setSeatingData(formattedData);
      } catch (err) {
        setError('Failed to load seating data. Please make sure the seating.xlsx file is available in the public folder.');
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
                      <span className="detail-value">{person.tableNumber}</span>
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