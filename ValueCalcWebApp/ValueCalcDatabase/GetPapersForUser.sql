CREATE PROCEDURE [dbo].[GetPapersForUser]
	@ID int = 0
AS
	SELECT [dbo].[ValuePapers].id, [dbo].[ValuePapers].boughtShares, [dbo].[ValuePapers].spentBuying, [dbo].[ValuePapers].currentPrice, [dbo].[ValuePapers].boughtShares,
		[dbo].[ValuePapers].name
  from [dbo].[ValuePapers],[dbo].[BoughtPapers] 
  where [dbo].[BoughtPapers].userId = @ID and [dbo].[ValuePapers].Id = [dbo].[BoughtPapers].paperId
RETURN 0
