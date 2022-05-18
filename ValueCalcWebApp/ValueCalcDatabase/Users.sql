CREATE TABLE [dbo].[Users]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY (1, 1), 
    [username] NCHAR(10) NULL, 
    [firstName] NCHAR(10) NULL, 
    [lastName] NCHAR(10) NULL, 
    [password] NCHAR(10) NULL
)
