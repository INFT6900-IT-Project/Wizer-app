-- Drop tables if they already exist
DROP TABLE IF EXISTS AuditLogs CASCADE;
DROP TABLE IF EXISTS Notifications CASCADE;
DROP TABLE IF EXISTS UserModules CASCADE;
DROP TABLE IF EXISTS ModuleScheduling CASCADE;
DROP TABLE IF EXISTS TestResponses CASCADE;
DROP TABLE IF EXISTS TestAttempts CASCADE;
DROP TABLE IF EXISTS TestAnswers CASCADE;
DROP TABLE IF EXISTS TestQuestions CASCADE;
DROP TABLE IF EXISTS ModuleContent CASCADE;
DROP TABLE IF EXISTS Modules CASCADE;
DROP TABLE IF EXISTS Users CASCADE;

-- create 1. Users Table
CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,          -- Auto-incrementing primary key
    UserName VARCHAR(255) NOT NULL,
    FirstName VARCHAR(100) NOT NULL,    -- User's first name
    LastName VARCHAR(100) NOT NULL,     -- User's last name
    Email VARCHAR(255) NOT NULL UNIQUE, -- User's email, must be unique
    PasswordHash VARCHAR(255) NOT NULL, -- Hashed password for secure login
    PhoneNumber VARCHAR(15),            -- Optional phone number for 2FA
    Role VARCHAR(50) CHECK (Role IN ('Admin', 'ModuleOwner', 'User')), -- Role for user
    IsTwoFactorEnabled BOOLEAN DEFAULT FALSE,  -- 2FA enabled flag
    TwoFactorSecret VARCHAR(255),       -- TOTP secret for two-factor authentication
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-populated with creation time
    LastLogin TIMESTAMP                 -- Last login timestamp, updated on each login
);


-- Create 2. Modules Table
CREATE TABLE Modules (
    ModuleID SERIAL PRIMARY KEY,        -- Auto-incrementing primary key
    ModuleName VARCHAR(255) NOT NULL,   -- Module name
    ModuleDescription TEXT,             -- Detailed description of the module
    OwnerID INT NOT NULL,               -- Foreign key referencing the ModuleOwner (from Users)
    IsActive BOOLEAN DEFAULT TRUE,      -- To deactivate a module when necessary
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-populated with creation time
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-updated on each modification
    FOREIGN KEY (OwnerID) REFERENCES Users(UserID) ON DELETE CASCADE -- Cascading delete
);

-- Create 3. Module Content Table
CREATE TABLE ModuleContent (
    ContentID SERIAL PRIMARY KEY,       -- Auto-incrementing primary key
    ModuleID INT NOT NULL,              -- Foreign key referencing the module
    ContentType VARCHAR(50),            -- Type of content (e.g., 'Video', 'Text')
    ContentURL VARCHAR(500),            -- URL or file path to the content resource
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-populated with creation time
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-updated on each modification
    FOREIGN KEY (ModuleID) REFERENCES Modules(ModuleID) ON DELETE CASCADE -- Delete contents when module is deleted
);

-- Create 4. TestQuestions Table
CREATE TABLE TestQuestions (
    QuestionID SERIAL PRIMARY KEY,      -- Auto-incrementing primary key
    ModuleID INT NOT NULL,              -- Foreign key referencing the module
    QuestionText VARCHAR(1000) NOT NULL, -- The question text
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-populated with creation time
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-updated on each modification
    FOREIGN KEY (ModuleID) REFERENCES Modules(ModuleID) ON DELETE CASCADE -- Cascade on module deletion
);

-- Create 5. TestAnswers Table
CREATE TABLE TestAnswers (
    AnswerID SERIAL PRIMARY KEY,        -- Auto-incrementing primary key
    QuestionID INT NOT NULL,            -- Foreign key referencing the test question
    AnswerText VARCHAR(500) NOT NULL,   -- The answer text
    IsCorrect BOOLEAN NOT NULL,         -- Marks whether this answer is correct
    FOREIGN KEY (QuestionID) REFERENCES TestQuestions(QuestionID) ON DELETE CASCADE -- Cascade on question deletion
);

-- Create 6. TestAttempts Table
CREATE TABLE TestAttempts (
    AttemptID SERIAL PRIMARY KEY,       -- Auto-incrementing primary key
    UserID INT NOT NULL,                -- Foreign key referencing the user
    ModuleID INT NOT NULL,              -- Foreign key referencing the module
    AttemptDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-populated with attempt time
    Score DECIMAL(5,2),                 -- User's score for the test attempt
    IsPassed BOOLEAN NOT NULL,          -- Whether the user passed the test
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE, -- Cascade on user deletion
    FOREIGN KEY (ModuleID) REFERENCES Modules(ModuleID) ON DELETE CASCADE -- Cascade on module deletion
);

-- Create 7. TestResponses Table
CREATE TABLE TestResponses (
    ResponseID SERIAL PRIMARY KEY,      -- Auto-incrementing primary key
    AttemptID INT NOT NULL,             -- Foreign key referencing the test attempt
    QuestionID INT NOT NULL,            -- Foreign key referencing the question
    AnswerID INT NOT NULL,              -- Foreign key referencing the answer chosen by the user
    FOREIGN KEY (AttemptID) REFERENCES TestAttempts(AttemptID) ON DELETE CASCADE, -- Cascade on attempt deletion
    FOREIGN KEY (QuestionID) REFERENCES TestQuestions(QuestionID) ON DELETE CASCADE, -- Cascade on question deletion
    FOREIGN KEY (AnswerID) REFERENCES TestAnswers(AnswerID) ON DELETE CASCADE -- Cascade on answer deletion
);

-- Create 8. ModuleScheduling Table
CREATE TABLE ModuleScheduling (
    ScheduleID SERIAL PRIMARY KEY,      -- Auto-incrementing primary key
    ModuleID INT NOT NULL,              -- Foreign key referencing the module
    StartDate TIMESTAMP NOT NULL,       -- Start date for the module
    EndDate TIMESTAMP NOT NULL,         -- End date for the module
    FrequencyDays INT NOT NULL,         -- Frequency (in days) to retake the test
    FOREIGN KEY (ModuleID) REFERENCES Modules(ModuleID) ON DELETE CASCADE -- Cascade on module deletion
);

-- Create 9. UserModules Table
CREATE TABLE UserModules (
    UserModuleID SERIAL PRIMARY KEY,    -- Auto-incrementing primary key
    UserID INT NOT NULL,                -- Foreign key referencing the user
    ModuleID INT NOT NULL,              -- Foreign key referencing the module
    RegistrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-populated with registration time
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE, -- Cascade on user deletion
    FOREIGN KEY (ModuleID) REFERENCES Modules(ModuleID) ON DELETE CASCADE -- Cascade on module deletion
);

-- Create 10. Notifications Table
CREATE TABLE Notifications (
    NotificationID SERIAL PRIMARY KEY,  -- Auto-incrementing primary key
    UserID INT NOT NULL,                -- Foreign key referencing the user
    Message VARCHAR(500) NOT NULL,      -- Notification message
    IsRead BOOLEAN DEFAULT FALSE,       -- Whether the notification has been read
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-populated with creation time
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE -- Cascade on user deletion
);

-- Create 11. AuditLogs Table
CREATE TABLE AuditLogs (
    LogID SERIAL PRIMARY KEY,           -- Auto-incrementing primary key
    UserID INT NOT NULL,                -- Foreign key referencing the user who performed the action
    Action VARCHAR(255) NOT NULL,       -- Action performed (e.g., 'Created Module', 'Deleted User')
    TableName VARCHAR(255),             -- The affected table (e.g., 'Users', 'Modules')
    RecordID INT,                       -- The affected record's ID
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-populated with action time
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE -- Cascade on user deletion
);

-- Indexes and Performance Enhancements
CREATE INDEX idx_user_email ON Users(Email);
CREATE INDEX idx_module_ownerid ON Modules(OwnerID);
CREATE INDEX idx_testattempts_userid ON TestAttempts(UserID);
