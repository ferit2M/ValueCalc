CREATE TABLE [dbo].[Users]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY (1, 1), 
    [username] VARCHAR(10) NULL UNIQUE, 
    [firstName] VARCHAR(10) NULL, 
    [lastName] VARCHAR(10) NULL, 
    [password] VARCHAR(10) NULL
)
