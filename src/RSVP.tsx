import './RSVP.css'
import { useState } from 'react'
import peaksToPromises from '@/assets/peaks-to-promises.png'

interface RSVPEntry {
  id: string
  name: string
  email: string
  mealChoice: string
  dietaryRestrictions: string
}

function RSVP() {
  const [rsvpEntries, setRsvpEntries] = useState<RSVPEntry[]>([
    {
      id: '1',
      name: '',
      email: '',
      mealChoice: '',
      dietaryRestrictions: ''
    }
  ])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const addRsvpEntry = () => {
    const newEntry: RSVPEntry = {
      id: Date.now().toString(),
      name: '',
      email: '',
      mealChoice: '',
      dietaryRestrictions: ''
    }
    setRsvpEntries([...rsvpEntries, newEntry])
  }

  const removeRsvpEntry = (id: string) => {
    if (rsvpEntries.length > 1) {
      setRsvpEntries(rsvpEntries.filter(entry => entry.id !== id))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate that all entries have required fields
    const invalidEntries = rsvpEntries.filter((entry, index) =>
      !entry.name.trim() || (index === 0 && !entry.email.trim()) || !entry.mealChoice
    )
    if (invalidEntries.length > 0) {
      setSubmitMessage('Please fill in name, meal choice for all entries, and email for the first guest.')
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    // Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwBFWcL0GCy5vSzJnBef1hwcfmJ5FgUrIkPk_6YDECcLWHfobQRWwKhDCeUvkjo6871/exec'

    try {
      // Generate a submission ID for this group of RSVPs
      const submissionId = Date.now().toString()

      // Submit each RSVP entry as a separate request
      const submissionPromises = rsvpEntries.map(entry =>
        fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: entry.name,
            email: entry.email,
            mealChoice: entry.mealChoice,
            dietaryRestrictions: entry.dietaryRestrictions,
            submissionId: submissionId,
            timestamp: new Date().toISOString()
          })
        })
      )

      await Promise.all(submissionPromises)

      // Reset form on success
      setSubmitMessage(`Thank you! We have received ${rsvpEntries.length} RSVP${rsvpEntries.length > 1 ? 's' : ''}.`)
      setRsvpEntries([{
        id: '1',
        name: '',
        email: '',
        mealChoice: '',
        dietaryRestrictions: ''
      }])

    } catch (error) {
      console.error('Error submitting RSVP:', error)
      setSubmitMessage('Sorry, there was an error submitting your RSVP. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (id: string, field: keyof Omit<RSVPEntry, 'id'>, value: string) => {
    setRsvpEntries(entries =>
      entries.map(entry =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    )
  }

  return (
    <div id="rsvp-page">
      <div id="rsvp-form-container">
        <div className="rsvp-image-container">
          <img src={peaksToPromises} alt="From Peaks to Promises" className="rsvp-header-image" />
        </div>
        <h1 className="rsvp-header">RSVP</h1>

        <div className="rsvp-note">
          Children are warmly welcomed to join our celebration. Please only include them in your RSVP if they will be enjoying a meal with us.
        </div>

        <form onSubmit={handleSubmit} className="rsvp-form">
          {rsvpEntries.map((entry, index) => (
            <div key={entry.id} className="rsvp-entry">
              <div className="entry-header">
                <h3 className="entry-title">Guest {index + 1}</h3>
                {rsvpEntries.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRsvpEntry(entry.id)}
                    className="remove-entry-button"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="form-group">
                <label htmlFor={`name-${entry.id}`} className="form-label">Name</label>
                <input
                  type="text"
                  id={`name-${entry.id}`}
                  value={entry.name}
                  onChange={(e) => handleChange(entry.id, 'name', e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor={`email-${entry.id}`} className="form-label">
                  Email{index > 0 ? ' (optional)' : ''}
                </label>
                <input
                  type="email"
                  id={`email-${entry.id}`}
                  value={entry.email}
                  onChange={(e) => handleChange(entry.id, 'email', e.target.value)}
                  className="form-input"
                  required={index === 0}
                />
              </div>

              <div className="form-group">
                <label htmlFor={`mealChoice-${entry.id}`} className="form-label">Meal Choice</label>
                <select
                  id={`mealChoice-${entry.id}`}
                  value={entry.mealChoice}
                  onChange={(e) => handleChange(entry.id, 'mealChoice', e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Please select a meal</option>
                  <option value="short-ribs">Belgian Chimay Ale Braised Boneless Short Ribs</option>
                  <option value="branzino">Baked Branzino Fillet</option>
                  <option value="tofu-cake">Broccoli Tofu Cake (Vegan, Gluten-Free)</option>
                  <option value="chicken-fingers">Chicken Fingers - Kids Meal</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor={`dietaryRestrictions-${entry.id}`} className="form-label">Dietary Restrictions or Allergies</label>
                <textarea
                  id={`dietaryRestrictions-${entry.id}`}
                  value={entry.dietaryRestrictions}
                  onChange={(e) => handleChange(entry.id, 'dietaryRestrictions', e.target.value)}
                  className="form-textarea"
                  placeholder="Please list any allergies or dietary restrictions..."
                  rows={3}
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addRsvpEntry}
            className="add-entry-button"
            disabled={isSubmitting}
          >
            Add Another Guest
          </button>

          <button type="submit" className="rsvp-submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : `Submit ${rsvpEntries.length} RSVP${rsvpEntries.length > 1 ? 's' : ''}`}
          </button>

          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default RSVP