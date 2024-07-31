-- DATABASE
use HospitalDB;

-- TABLE
select * from dbo.PatientInformation;

select * from dbo.PatientInformation_mod;

SELECT * FROM sys.procedures;

delete from dbo.PatientInformation where PATIENTID > 6977;


-- CREATE TABLE

CREATE TABLE dbo.DRUGINFO (
    DRUGID INT PRIMARY KEY,
    DRUGNAME VARCHAR(50),
    DOSAGE VARCHAR(20),
    DRUGSTARTDATE DATE,
	EXPIRATIONDATE DATE
);

CREATE TABLE dbo.MENUINFO (
    MENUID VARCHAR(50),
    VIEWNAME VARCHAR(50),
    VIEWCONTROLLER VARCHAR(50)
);

SELECT * FROM dbo.MENUINFO;

DELETE FROM dbo.MENUINFO WHERE MENUID = 'EDV';

INSERT INTO dbo.MENUINFO (MENUID, VIEWNAME, VIEWCONTROLLER)
VALUES('ADV','AddDrugView','PatientInformation'),
('APV','AddPatientView','PatientInformation'),
('DV','DrugView','PatientInformation'),
('EDV','EditPatientView','PatientInformation'),
('PIV','PatientInformationView','PatientInformation'),
('MV','MenuView','Menu');

-- TABLE INSERT, UPDATE, DELETE

INSERT INTO dbo.PatientInformation_mod (PATIENTID, PATIENTNAME, DRUG, DOSAGE, DATEMODIFIED)
Select * from dbo.PatientInformation where PATIENTID = '1001'; 

INSERT INTO dbo.PatientInformation (PATIENTID, PATIENTNAME, DRUG, DOSAGE, DATEMODIFIED)
VALUES((SELECT MAX(PATIENTID) FROM dbo.PatientInformation) + 1, 'JEFF POG3', 'SHAB', 44.123, CAST(GETDATE() AS DATE));
select * from dbo.PatientInformation;

SELECT(SELECT MAX(PATIENTID) FROM dbo.PatientInformation) + 1;

DELETE FROM dbo.PatientInformation_mod;

INSERT INTO dbo.PatientInformation_mod (PATIENTID, PATIENTNAME, DRUG, DOSAGE, DATEMODIFIED)
Select * from dbo.PatientInformation where PATIENTID = '1001'; 

SELECT * FROM sys.procedures;

-- DRUG TABLE query

CREATE TABLE dbo.DRUGINFO (
    DRUGID INT PRIMARY KEY,
    DRUGNAME VARCHAR(50),
    DOSAGE VARCHAR(20),
    DRUGSTARTDATE DATE,
	EXPIRATIONDATE DATE
);

select * from dbo.DRUGINFO;

ALTER TABLE dbo.DRUGINFO
DROP COLUMN DOSAGE;

ALTER TABLE dbo.DRUGINFO
ADD DOSAGE DECIMAL(7,4);

INSERT INTO dbo.DRUGINFO (DRUGID, DRUGNAME, DRUGSTARTDATE, EXPIRATIONDATE, DOSAGE)
VALUES (1,'NEOSEP', CAST(GETDATE() AS DATE), '25DEC2024' , 10.00),
		(2,'NEOSEP', CAST(GETDATE() AS DATE),  '25DEC2024', 20.00),
		(3,'NEOSEP', CAST(GETDATE() AS DATE), '25DEC2024', 30.00),
		(4,'TUSERAN',  CAST(GETDATE() AS DATE), '25DEC2024', 10.00),
		(5,'TUSERAN',  CAST(GETDATE() AS DATE), '25DEC2024', 20.00),
		(6,'TUSERAN',  CAST(GETDATE() AS DATE), '25DEC2024', 30.00),
		(7,'BIOGESIC',  CAST(GETDATE() AS DATE), '25DEC2024', 10.00),
		(8,'BIOGESIC',  CAST(GETDATE() AS DATE), '25DEC2024', 20.00),
		(9,'BIOGESIC',  CAST(GETDATE() AS DATE), '25DEC2024', 30.00);

UPDATE dbo.DRUGINFO
SET DRUGNAME = 'TUSERANONE' WHERE DRUGID = 4;

-- DRUGHISTORY TABLE query
CREATE TABLE DBO.DRUGHISTORY(
PATIENTID INT NOT NULL,
PATIENTNAME VARCHAR(50) NOT NULL,
DRUGID INT NOT NULL,
DRUGNAME VARCHAR(50) NOT NULL,
DATEGIVEN DATE
);

SELECT * FROM DBO.DRUGHISTORY;

SELECT PATIENTID, PATIENTNAME, DRUG FROM dbo.PatientInformation;
SELECT * FROM DBO.DRUGINFO;

 INSERT INTO PatientInformation values((SELECT MAX(PATIENTID) FROM dbo.PatientInformation) + 1, @PATIENTNAME, @DRUG, @DOSAGE, CAST(GETDATE() AS DATE));


SELECT * FROM DBO.PatientInformation ORDER BY PATIENTID DESC;

SELECT * FROM DBO.PatientInformation WHERE 
PATIENTNAME = 'JUNETWOSEVEN' AND 
DRUG = 'NEOSEPONE' AND 
CAST(DATEMODIFIED AS DATE) = '2024-06-28';

SELECT * FROM DBO.PatientInformation WHERE 
PATIENTNAME = 'JUNETWOSEVEN' AND 
DRUG = 'NEOSEPONE' AND 
DATEMODIFIED = '2024-06-28';

SELECT * FROM DBO.PatientInformation WHERE 
DATEMODIFIED BETWEEN '2024-06-28' AND '2024-07-04';


SELECT * FROM DBO.PatientInformation WHERE 
DATEMODIFIED BETWEEN '2024-07-04' AND '2024-07-04';