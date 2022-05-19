CREATE TABLE [dbo].[BoughtPapers]
(
	[userId] INT NOT NULL, 
  [paperId] INT NOT NULL,

  CONSTRAINT PK_BoughtPapers PRIMARY KEY (userId, paperId),

  CONSTRAINT FK_Users FOREIGN KEY (userId) REFERENCES Users(Id),
  CONSTRAINT FK_Papers FOREIGN KEY (paperId) REFERENCES ValuePapers(Id),
)
