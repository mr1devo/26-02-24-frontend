import React, { useState } from 'react';
import { eventForm } from '../services/Userapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Event.css';
import Nav2 from './Nav2';
import Popup from './Popup';
import { useNavigate } from 'react-router-dom';

const EventForm = () => {
  const [name, setName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [eventType, setEventType] = useState('');
  const [expectedAmount, setExpectedAmount] = useState('');
  const [peopleParticipation, setPeopleParticipation] = useState('');
  const [foodType, setFoodType] = useState([]);
  const [date, setDate] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contactNo.length !== 10 || isNaN(contactNo)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    try {
      await eventForm({
        name,
        contactNo,
        eventType,
        expectedAmount,
        peopleParticipation,
        date, 
        foodType: foodType,
      });
      console.log('Event form submitted successfully!');
      setName('');
      setContactNo('');
      setEventType('');
      setExpectedAmount('');
      setPeopleParticipation('');
      setDate('');
      setFoodType([]);
      setShowPopup(true);
    } catch (error) {
      console.error('Error submitting event form:', error.message);
      toast.error('Error submitting event form. Please try again later.');
    }
  };
  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/');
  };

  return (
    <div>
      <Nav2 />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div
        className="form-container"
        style={{ overflowY: 'auto', maxHeight: '80vh' }}>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact No:</label>
            <input
              placeholder="Enter your contact no"
              type="tel"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Event Type:</label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required>
              <option value="">Select Event Type</option>
              <option value="marriage">Marriage</option>
              <option value="engagement">Engagement</option>
              <option value="namingCeremony">Naming Ceremony</option>
              <option value="Birthday">Birthday</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>Expected Amount:</label>
            <input
              placeholder="Enter your budget"
              type="number"
              value={expectedAmount}
              onChange={(e) => setExpectedAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>People Participation:</label>
            <input
              placeholder="Enter number of participants"
              type="number"
              value={peopleParticipation}
              onChange={(e) => setPeopleParticipation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              placeholder="Enter event date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Food Type:</label>
            <br/>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Rice"
                  checked={foodType.includes('Rice')}
                  onChange={(e) =>
                    setFoodType((prevFoodType) =>
                      e.target.checked
                        ? [...prevFoodType, e.target.value]
                        : prevFoodType.filter((item) => item !== e.target.value)
                    )
                  }
                />
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Rice
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Juices"
                  checked={foodType.includes('Juices')}
                  onChange={(e) =>
                    setFoodType((prevFoodType) =>
                      e.target.checked
                        ? [...prevFoodType, e.target.value]
                        : prevFoodType.filter((item) => item !== e.target.value)
                    )
                  }
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Juices
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Currys"
                  checked={foodType.includes('Currys')}
                  onChange={(e) =>
                    setFoodType((prevFoodType) =>
                      e.target.checked
                        ? [...prevFoodType, e.target.value]
                        : prevFoodType.filter((item) => item !== e.target.value)
                    )
                  }
                />
                &nbsp; &nbsp;&nbsp;&nbsp; Currys
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Salads"
                  checked={foodType.includes('Salads')}
                  onChange={(e) =>
                    setFoodType((prevFoodType) =>
                      e.target.checked
                        ? [...prevFoodType, e.target.value]
                        : prevFoodType.filter((item) => item !== e.target.value)
                    )
                  }
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salads
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Desserts"
                  checked={foodType.includes('Desserts')}
                  onChange={(e) =>
                    setFoodType((prevFoodType) =>
                      e.target.checked
                        ? [...prevFoodType, e.target.value]
                        : prevFoodType.filter((item) => item !== e.target.value)
                    )
                  }
                />
                &nbsp; Desserts
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Others"
                  checked={foodType.includes('Others')}
                  onChange={(e) =>
                    setFoodType((prevFoodType) =>
                      e.target.checked
                        ? [...prevFoodType, e.target.value]
                        : prevFoodType.filter((item) => item !== e.target.value)
                    )
                  }
                />
                &nbsp;&nbsp;&nbsp;&nbsp; Others
              </label>
            </div>
          </div>
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
      {showPopup && (
        <Popup
          message="Event form submitted successfully! Admin will contact you soon"
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
};

export default EventForm;
