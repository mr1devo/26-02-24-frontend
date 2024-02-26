import React, { useState, useEffect } from 'react';
import {
  fetchEnquiries,
  deleteEnquiries,
  updateEvent,
} from '../services/Userapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Enquiries.css';
import AdminNav from './AdminNav';

const Enquiries = () => {
  const [events, setEvents] = useState([]);
  const [editableEvent, setEditableEvent] = useState(null);
  const [availableFoodOptions] = useState([
    'Rice',
    'Juices',
    'Currys',
    'Salads',
    'Desserts',
    'Others',
  ]);

  useEffect(() => {
    fetchEnquiriesData();
  }, []);

  const fetchEnquiriesData = async () => {
    try {
      const enquiriesData = await fetchEnquiries();
      setEvents(enquiriesData);
    } catch (error) {
      console.error('Error fetching event enquiries:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEnquiries(id);
      setEvents(events.filter((event) => event._id !== id));
      console.log('Event enquiry deleted successfully!');
      toast.success('Event enquiry deleted successfully!');
    } catch (error) {
      console.error('Error deleting event enquiry:', error.message);
    }
  };

  const handleEdit = (event) => {
    setEditableEvent(event);
  };

  const handleCancelEdit = () => {
    setEditableEvent(null);
  };

  const handleUpdateEvent = async (eventId, updatedEventData) => {
    try {
      await updateEvent(eventId, updatedEventData);
      console.log('Event updated successfully');
      fetchEnquiriesData();
      setEditableEvent(null);
      toast.success('Event updated successfully!');
    } catch (error) {
      console.error('Error updating event:', error.message);
      toast.error('Failed to update event');
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedEventData = {
      name: formData.get('name'),
      contactNo: formData.get('contactNo'),
      eventType: formData.get('eventType'),
      expectedAmount: formData.get('expectedAmount'),
      peopleParticipation: formData.get('peopleParticipation'),
      date: formData.get('date'),
      foodType: formData.getAll('foodType'),
    };
    handleUpdateEvent(editableEvent._id, updatedEventData);
  };

  return (
    <div>
      <AdminNav />
      <br />
      <br />
      <br />
      <br />
      <div className="enquiries-container">
        <h2>Event Enquiries</h2>
        <ul className="enquiries-list">
          {events.map((event,index) => (
            <li key={event._id} className="enquiry-item">
                <p><strong className='strong1' style={{color:'blue'}}>No:</strong> {index + 1}</p> 
              {editableEvent && editableEvent._id === event._id ? (
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" defaultValue={event.name} />
                  <input
                    type="text"
                    name="contactNo"
                    defaultValue={event.contactNo}
                  />
                  <input
                    type="text"
                    name="eventType"
                    defaultValue={event.eventType}
                  />
                  <input
                    type="text"
                    name="expectedAmount"
                    defaultValue={event.expectedAmount}
                  />
                  <input
                    type="text"
                    name="peopleParticipation"
                    defaultValue={event.peopleParticipation}
                  />
                  <input type="text" name="date" defaultValue={event.date} />
                  <div>
                    <strong style={{ color: 'green' }}>Food Type:</strong>{' '}
                    {availableFoodOptions.map((foodOption, index) => (
                      <label key={index}>
                        <input
                          type="checkbox"
                          name="foodType"
                          value={foodOption}
                          defaultChecked={event.foodType.includes(foodOption)}
                        />
                        {foodOption}
                      </label>
                    ))}
                  </div>
                  <button type="submit">Update</button>
                  <button type="button" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </form>
              ) : (
                <div className="enquiry-details">
                  <p>
                    <strong style={{ color: 'green' }}>Name:</strong>{' '}
                    {event.name}
                  </p>
                  <p>
                    <strong style={{ color: 'red' }}>Contact No:</strong>{' '}
                    {event.contactNo}
                  </p>
                  <p>
                    <strong style={{ color: 'green' }}>Event Type:</strong>{' '}
                    {event.eventType}
                  </p>
                  <p>
                    <strong style={{ color: 'red' }}>Expected Amount:</strong>{' '}
                    {event.expectedAmount}
                  </p>
                  <p>
                    <strong style={{ color: 'green' }}>
                      People Participation:
                    </strong>{' '}
                    {event.peopleParticipation}
                  </p>
                  <p>
                    <strong style={{ color: 'red' }}>Event Date:</strong>{' '}
                    {event.date}
                  </p>
                  <div>
                    <strong style={{ color: 'green' }}>Foods :</strong>{' '}
                    {event.foodType.map((food, index) => (
                      <div key={index} style={{ marginRight: '10px' }}>
                        {food}
                      </div>
                    ))}
                  </div><br/>
                  <div className="button-container">
                    <button className="edit" onClick={() => handleEdit(event)}>
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(event._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Enquiries;
