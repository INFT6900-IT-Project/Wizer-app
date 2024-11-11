-- Create User Table
CREATE TABLE IF NOT EXISTS "User" (
    "UserID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "FullName" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255) UNIQUE NOT NULL,
    "PasswordHash" VARCHAR(255) NOT NULL,
    "Role" VARCHAR(50) CHECK ("Role" IN ('Admin', 'ModuleOwner', 'Student')) NOT NULL,
    "TwoFactorEnabled" BOOLEAN DEFAULT FALSE,
    "CreatedDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "LastLoginDate" TIMESTAMP
);

-- Create Module Table
CREATE TABLE IF NOT EXISTS "Module" (
    "ModuleID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ModuleName" VARCHAR(255) NOT NULL,
    "Description" TEXT,
    "Schedule" JSONB,
    "CreatedDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "LastUpdatedDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "ModuleOwnerID" INT,
    FOREIGN KEY ("ModuleOwnerID") REFERENCES "User"("UserID") ON DELETE SET NULL -- Allow NULL in ModuleOwnerID
);

-- Create Test Table
CREATE TABLE IF NOT EXISTS "Test" (
    "TestID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ModuleID" INT NOT NULL,
    "TestName" VARCHAR(255) NOT NULL,
    "Description" TEXT,
    "TestSchedule" JSONB,
    "CreatedDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "MaxAttempts" INT DEFAULT 1,
    "PassMark" DECIMAL(5, 2) NOT NULL,
    FOREIGN KEY ("ModuleID") REFERENCES "Module"("ModuleID") ON DELETE CASCADE
);

-- Create Question Table
CREATE TABLE IF NOT EXISTS "Question" (
    "QuestionID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "TestID" INT NOT NULL,
    "QuestionText" TEXT NOT NULL,
    "QuestionType" VARCHAR(50) CHECK ("QuestionType" IN ('MCQ', 'ShortAnswer')) NOT NULL,
    "CreatedDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("TestID") REFERENCES "Test"("TestID") ON DELETE CASCADE
);

-- Create Answer Table
CREATE TABLE IF NOT EXISTS "Answer" (
    "AnswerID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "QuestionID" INT NOT NULL,
    "AnswerText" TEXT NOT NULL,
    "IsCorrect" BOOLEAN DEFAULT FALSE,
    FOREIGN KEY ("QuestionID") REFERENCES "Question"("QuestionID") ON DELETE CASCADE
);

-- Create TestAttempt Table
CREATE TABLE IF NOT EXISTS "TestAttempt" (
    "AttemptID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "TestID" INT NOT NULL,
    "UserID" INT NOT NULL,
    "AttemptDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "Score" DECIMAL(5, 2),
    "Passed" BOOLEAN,
    "Feedback" TEXT,
    FOREIGN KEY ("TestID") REFERENCES "Test"("TestID") ON DELETE CASCADE,
    FOREIGN KEY ("UserID") REFERENCES "User"("UserID") ON DELETE CASCADE
);

-- Create Notification Table
CREATE TABLE IF NOT EXISTS "Notification" (
    "NotificationID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "UserID" INT NOT NULL,
    "NotificationType" VARCHAR(50) CHECK ("NotificationType" IN ('Email', 'In-App')) NOT NULL,
    "Message" TEXT,
    "IsRead" BOOLEAN DEFAULT FALSE,
    "CreatedDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("UserID") REFERENCES "User"("UserID") ON DELETE CASCADE
);

-- Create UserPathway Table
CREATE TABLE IF NOT EXISTS "UserPathway" (
    "PathwayID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "UserID" INT NOT NULL,
    "ModuleID" INT NOT NULL,
    "EnrolledDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "CompletionDate" TIMESTAMP,
    FOREIGN KEY ("UserID") REFERENCES "User"("UserID") ON DELETE CASCADE,
    FOREIGN KEY ("ModuleID") REFERENCES "Module"("ModuleID") ON DELETE CASCADE
);
