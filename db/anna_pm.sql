-- Create database
CREATE DATABASE IF NOT EXISTS anna_pm;
USE anna_pm;

-- Clients table
CREATE TABLE IF NOT EXISTS clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(40),
  company VARCHAR(160),
  notes VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Client meetings table
CREATE TABLE IF NOT EXISTS client_meetings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_id INT NOT NULL,
  title VARCHAR(160) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  mode ENUM('In-Person','Online','Phone') DEFAULT 'In-Person',
  location VARCHAR(200),
  meeting_link VARCHAR(300),
  status ENUM('Scheduled','Cancelled','Completed') DEFAULT 'Scheduled',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_meeting_client FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Sample data (optional)
INSERT INTO clients (name, email, phone, company, notes)
VALUES ('Anna Smith','anna@annaarch.com','+971-55-1234567','Anna Architects','Prefers morning meetings');

INSERT INTO client_meetings (client_id, title, date, time, mode, location, meeting_link, status)
VALUES (1, 'Initial Briefing', '2025-08-20', '10:00:00', 'In-Person', 'Office', NULL, 'Scheduled');
