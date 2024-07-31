
use HospitalDB;

SELECT * FROM sys.procedures;


DELETE FROM sys.procedures WHERE NAME = 'SPGetDrugInfo';
-- CREATE STORED PROCEDURE

-- SP NAME: SPGetPatientInfo
--CREATE PROCEDURE GetPatientInfo
--AS
--BEGIN
    -- Select all rows from the PatientInformation table
    --SELECT * FROM dbo.PatientInformation;
--END

--________________________________________________________________________________________________________________

-- SP NAME: SPAddPatient
CREATE PROCEDURE [dbo].[SPAddPatient]  
(  
   @PATIENTID int,  
   @PATIENTNAME varchar(50),  
   @DRUG varchar(50),
   @DOSAGE decimal(7,4),
   @DATEMODIFIED date
)  
AS  
BEGIN  
	INSERT INTO dbo.PatientInformation (PATIENTID, PATIENTNAME, DRUG, DOSAGE, DATEMODIFIED)
	VALUES((SELECT MAX(PATIENTID) FROM dbo.PatientInformation) + 1, @PATIENTNAME, @DRUG, @DOSAGE, CAST(GETDATE() AS DATE));
END

--INSERT INTO PatientInformation values(6969, 'MENG GAMING', 'SHABU', 3.00, '01MAY2024');

-- SP NAME: SPGetMenuInfo
CREATE PROCEDURE [dbo].[SPGetMenuInfo]  
AS  
BEGIN  
	SELECT * FROM dbo.MENUINFO;
END

SELECT * FROM dbo.MENUINFO;

CREATE PROCEDURE [dbo].[SPSearchMenu]  
(
@MENUID varchar(50)
)
AS  
BEGIN  
	SELECT * FROM dbo.MENUINFO WHERE MENUID = @MENUID;
END

SELECT * FROM dbo.MENUINFO;
--________________________________________________________________________________________________________________

-- SP NAME: SPSelectOneRec
--CREATE PROCEDURE SPSelectOneRec
--AS
--BEGIN
--    -- Select all rows from the PatientInformation table
--    SELECT * FROM dbo.PatientInformation WHERE PATIENTID = '@PATIENTID';
--END


-- SP NAME: SPUpdatePatientInfo

--CREATE PROCEDURE [dbo].[SPUpdatePatientInfo] 
--(  
--	@PATIENTID int,  
--	@PATIENTNAME varchar(50),  
--	@DRUG varchar(50),
--	@DOSAGE decimal(7,4),
--	@DATEMODIFIED date 
--)  
--AS
--BEGIN  
--   UPDATE PatientInformation
--   SET  
--   PATIENTNAME = @PATIENTNAME,  
--   DRUG = @DRUG, 
--   DOSAGE = @DOSAGE,
--   DATEMODIFIED = @DATEMODIFIED
--   WHERE PATIENTID = @PATIENTID  
--END

-- SP NAME: SPDeletePatient


CREATE PROCEDURE [dbo].[SPDeletePatient] 
(  
   @PATIENTID int  
)  
AS   
BEGIN  
   DELETE FROM PatientInformation WHERE PATIENTID = @PATIENTID  
END

--________________________________________________________________________________________________________________

-- SP NAME: SPGetDrugInfo
 
CREATE PROCEDURE [dbo].[SPGetDrugInfo] 
AS
BEGIN
     --Select all rows from the PatientInformation table
    SELECT * FROM dbo.DRUGINFO;
END;

CREATE PROCEDURE [dbo].[SPGetDrugInfoDistinctDosage] 
AS
BEGIN
     --Select all rows from the PatientInformation table
    SELECT DISTINCT(DOSAGE) FROM dbo.DRUGINFO;
END;



SELECT * FROM dbo.DRUGINFO;


--________________________________________________________________________________________________________________

CREATE PROCEDURE [dbo].[SPAddDrug]  
(  
   @DRUGID INT,  
   @DRUGNAME VARCHAR(50),  
   @DRUGSTARTDATE DATE,
   @EXPIRATIONDATE DATE,
   @DOSAGE decimal(7,4)
)  
AS  
BEGIN  
	INSERT INTO dbo.DRUGINFO (DRUGID, DRUGNAME, DRUGSTARTDATE, EXPIRATIONDATE, DOSAGE)
	VALUES((SELECT MAX(DRUGID) FROM dbo.DRUGINFO) + 1, @PATIENTNAME, @DRUG, @DOSAGE, CAST(GETDATE() AS DATE));
END

-- SELECT SP WITH CONDITION

CREATE PROCEDURE [dbo].[SPUniqueDrug] 
(  
	@PATIENTNAME varchar(50),  
	@DRUG varchar(50),
	@DATEMODIFIED date 
)  
AS
BEGIN  
SET NOCOUNT ON; -- To prevent the count of affected rows from being returned
  SELECT * 
   FROM PatientInformation
   WHERE  
   PATIENTNAME = @PATIENTNAME 
   AND DRUG = @DRUG
   AND CAST(DATEMODIFIED AS DATE) = @DATEMODIFIED;
END


-- GET RECORD FROM TABLE, CONDITION: START DATE AND END DATE INPUT FROM CALENDAR IN VIEW

CREATE PROCEDURE [dbo].[SPFilterPatientInfoByDate] 
    @STARTDATE DATE, -- CALENDAR USER INPUT
    @ENDDATE DATE -- CALENDAR USER INPUT
AS
BEGIN
    SELECT *
    FROM PatientInformation
    WHERE DATEMODIFIED BETWEEN @STARTDATE AND @ENDDATE;
END