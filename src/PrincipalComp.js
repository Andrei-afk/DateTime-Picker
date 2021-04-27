import React,{useState} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

import { addLocale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { getDefaultNormalizer } from '@testing-library/dom';


const PrincipalComp = () => {


    const [dateFromDP1, setDateFromDP1] = useState(null);
    const [dateFromDP2, setDateFromDP2] = useState(null);
    const [chooseD1, setChooseD1] = useState('Alege prima data');
    const [chooseD2, setChooseD2] = useState('Alege a doua data');
    const [bTextSL, setBTextSL] = useState('Schimba in engleza');
    const [bTextCA, setBTextCA] = useState('Persoana este majora sau minora?');
    const [bTextGetDiff, setBTextGetDiff] = useState('Diferenta dintre cele doua date este ');
    const [locale, setLocale] = useState('ro')
    const [timestamp, setTimestamp] = useState(null);
    const [majorPerson, setMajorPerson] = useState(null);
    const [persMajora, setPersMajora] = useState(null);
    
    const [textAge, setTextAge] = useState('Varsta ta este: ');
    const [textYear, setTextYear] = useState(' ani ');
    const [textMonth, setTextMonth] = useState(' luni ');
    const [textDay, setTextDay] = useState(' zile ');
    const [textHour, setTextHour] = useState(' ore ');
    const [textMin, setTextMin] = useState(' minute ');
    const [textSec, setTextSec] = useState(' secunde.');

    const [textSetSec, setTextSetSec] = useState('Numar secunde');
    const [textSetMin, setTextSetMin] = useState('Numar minute');
    const [textSetHour, setTextSetHour] = useState('Numar ore');
    const [textSetDay, setTextSetDay] = useState('Numar zile');
    const [textSetMonth, setTextSetMonth] = useState('Numar luni');
    const [textSetYear, setTextSetYear] = useState('Numar ani');
    const [textInstructions, setTextInstructions] = useState('Numerele introduse trebuie sa fie naturale. In cazul in care nu sunt introduse valori, se va utiliza valoarea 0');
    const [textBGetAge, setTextBGetAge] = useState('Varsta ta');
    const [textBGetSecDate, setTextBGetSecDate] = useState ('Obtine a doua data');
    const [errorNotNumberRo, setErrorNotnumberRo] = useState(null);
    const [errorNotPositiveRo, setErrorNotPositiveRo] = useState(null);
    const [errorNotNaturalRo, setErrorNotNaturalRo]=useState(null);
    const [errorNotNumberEn, setErrorNotnumberEn] = useState(null);
    const [errorNotPositiveEn, setErrorNotPositiveEn] = useState(null);
    const [errorNotNaturalEnn, setErrorNotNaturalEn]=useState(null);
    const [textDateEq, setTextDateEq] = useState('Cele doua date sunt egale');

    const [sSec, setSSec] = useState(0);
    const [sMin, setSMin] = useState(0);
    const [sHour, setSHour] = useState(0);
    const [sDay, setSDay] = useState(0);
    const [sMonth, setSMonth] = useState(0);
    const [sYear, setSYear] = useState(0);

    const [diffSec, setDiffSec] = useState(0);
    const [diffMin, setDiffMin] = useState(0);
    const [diffHour, setDiffHour] = useState(0);
    const [diffDay, setDiffDay] = useState(0);
    const [diffMonth, setDiffMonth] = useState(0);
    const [diffYear, setDiffYear] = useState(0);

    const [ageSec, setAgeSec] = useState(0);
    const [ageMin, setAgeMin] = useState(0);
    const [ageHour, setAgeHour] = useState(0);
    const [ageDay, setAgeDay] = useState(0);
    const [ageMonth, setAgeMonth] = useState(0);
    const [ageYear, setAgeYear] = useState(0);

    const [dateText, setDateText] = useState("Prima data aleasa: ")
    const [dateUtcText, setDateUtcText] = useState("Prima data aleasa, transformata in UTC:")

    var luni = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];
    var months = ['januray', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'octomber', 'november', 'december'];
    var compareDateVariable ;
    var bGetDiffPress = 0;
    var bGetAge = 0;

    addLocale('ro', {
        firstDayOfWeek: 1,
        dayNames: ['Duminica',  'Luni','Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'],
        dayNamesShort: ['dum', 'lun', 'mar', 'mie', 'joi', 'vin', 'sam'],
        dayNamesMin: ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'],
        monthNames: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
        monthNamesShort: ['ian', 'feb', 'mar', 'aprl', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        today: 'Astazi',
        clear: 'Sterge'
    });

    addLocale('en', {
        firstDayOfWeek: 1,
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        dayNamesMin: ['S', 'M', 'T', 'W', 'Th', 'F', 'St'],
        monthNames: ['januray', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'octomber', 'november', 'december'],
        monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        today: 'Today',
        clear: 'Clear'
    });

    

    const changeL = () =>
    {
        if (locale === 'ro')
        {
           setDateText("First date you chose: ");
           setDateUtcText("First date you chose, transformed in UTC");
           setBTextSL("change to Romanian");
           setTextDateEq("These two dates are qual");
           setBTextCA("Is the person major or minor?")
           setBTextGetDiff("The differece between these two dates is:")
           setChooseD1("Choose first date");
           setChooseD2("Choose second date");
           setTextAge("You are: ");
           setTextYear(" years ");
           setTextMonth(" months ");
           setTextDay(" days ");
           setTextHour(" hours ");
           setTextMin(" minutes ");
           setTextSec(" seconds. ");
           setTextSetSec("Number of seconds");
           setTextSetMin("Number of minutes");
           setTextSetHour("Number of hours");
           setTextSetDay("Number of days");
           setTextSetMonth("Number of months");
           setTextSetYear("Number of years");
           setTextInstructions("The numbers entered must be natural. If u don`t insert any values, the used values are 0.");
           setTextBGetSecDate("Get second date");
           setTextBGetAge("Get age");
           setLocale ('en');

        }
        else
        {
            setDateText("Prima data aleasa: ");
            setDateUtcText("Prima data aleasa, transformata in UTC:");
            setTextDateEq("Cele doua date sunt egale");
            setBTextSL("schimb in Engleza");
            setBTextCA("Persoana este minora sau majora?");
            setBTextGetDiff("Diferenta dintre cele doua date este :")
            
            setChooseD2("Alegeti a doua data");
            setChooseD1("Alegeti prima data");
            setTextAge("Varsta ta este: ");

            setTextYear(" ani ");
            setTextMonth(" luni ");
            setTextDay(" zile ");
            setTextHour(" ore ");
            setTextMin(" minute ");
            setTextSec(" secunde. ");
            setTextSetSec("Numar secunde");
            setTextSetMin("Numar minute");
            setTextSetHour("Numar ore");
            setTextSetDay("Numar zile");
            setTextSetMonth("Numar luni");
            setTextSetYear("Numar ani");
            setTextBGetSecDate("Obtine a doua data");
           setTextBGetAge("Varsta ta");
            setTextInstructions("Numerele introduse trebuie sa fie naturale. In cazul in care nu sunt introduse valori, se va utiliza valoarea 0");

            setLocale  ('ro');
        }
    }
    const age = () =>
    {
        let todayDate = new Date();
        if(todayDate < dateFromDP1)
        {
            setPersMajora("Pentru a calcula varsta introduceti o valoare mai mica decat data curenta");
            setMajorPerson("Can`t get the age bc you inserted a grater date then today`s date");
        }
        if(todayDate.getFullYear() - dateFromDP1.getFullYear() > 18)
        {
            setMajorPerson("Major person");
            setPersMajora("Pers majora");
        }
        else
        {
            if(todayDate.getFullYear() - dateFromDP1.getFullYear() < 18)
            {
                setMajorPerson("Minor person");
                setPersMajora("Pers minora");
            }
            else
            {
                if(todayDate.getMonth() < dateFromDP1.getMonth())
                {
                    setMajorPerson("Minor person");
                    setPersMajora("Pers minor");
                }
                else
                {
                    if(todayDate.getMonth() > dateFromDP1.getMonth())
                    {
                        setMajorPerson("Major person");
                        setPersMajora("Pers majora");
                    }
                    else
                    {
                        if(todayDate.getDate() > dateFromDP1.getDate())
                        {
                            setMajorPerson("Major person");
                            setPersMajora("Pers majora");
                        }
                        else
                        {
                            if(todayDate.getDate() < dateFromDP1.getDate())
                            {
                                setMajorPerson("Minor person");
                                setPersMajora("Pers minor");
                            }
                            else
                            {
                                if(todayDate.getHours() > dateFromDP1.getHours())
                                {
                                    setMajorPerson("Major person");
                                    setPersMajora("Pers majora");
                                }
                                else
                                {
                                    if(todayDate.getHours() < dateFromDP1.getHours())
                                    {
                                        setMajorPerson("Minor person");
                                        setPersMajora("Pers minor");
                                    }
                                    else
                                    {
                                        if(todayDate.getMinutes() > dateFromDP1.getMinutes())
                                        {
                                            setMajorPerson("Major person");
                                            setPersMajora("Pers majora");
                                        }
                                        else
                                        {
                                            if(todayDate.getMinutes() < dateFromDP1.getMinutes())
                                            {
                                                setMajorPerson("Minor person");
                                                setPersMajora("Pers minor");
                                            }
                                            else
                                            {
                                                if(todayDate.getSeconds() > dateFromDP1.getSeconds())
                                                {
                                                    setMajorPerson("Major person");
                                                    setPersMajora("Pers majora");
                                                }
                                                else
                                                {
                                                    if(todayDate.getSeconds() < dateFromDP1.getSeconds())
                                                    {
                                                        setMajorPerson("Minor person");
                                                        setPersMajora("Pers minor");
                                                    }
                                                    else
                                                    {
                                                        setMajorPerson("Major person");
                                                        setPersMajora("Pers majora");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
           
    }

    const getTimestamp = () =>
    {
        setTimestamp((dateFromDP1.getTime()).toLocaleString())
    }

    const getPersAge = () =>
    {
        let today = new Date();

        bGetAge = 1;
        let auxDate = new Date();
        auxDate.setSeconds(1);
        auxDate.setMinutes(0);
        auxDate.setHours(0);
        auxDate.setDate(1);
        auxDate.setMonth(0);
        auxDate.setFullYear(0);

        let difInS;
        difInS = (today.getTime() - dateFromDP1.getTime()) / 1000;

        auxDate.setSeconds(difInS + auxDate.getSeconds());

        setAgeSec (auxDate.getSeconds());
        setAgeMin (auxDate.getMinutes());
        setAgeHour (auxDate.getHours());
        setAgeDay (auxDate.getDate() - 1);
        setAgeMonth (auxDate.getMonth());
        setAgeYear (auxDate.getFullYear() );

    }

    const getSecondDate = () =>
    {
        setErrorNotNaturalRo(null);
        setErrorNotNaturalEn(null);
        setErrorNotPositiveEn(null);
        setErrorNotPositiveRo(null);
        setErrorNotnumberEn(null);
        setErrorNotnumberRo(null);
        
        

        if(isNaN(sSec) || isNaN(sMin) || isNaN (sMonth) || isNaN(sHour) || isNaN(sDay) || isNaN(sYear) 
        || sSec[0]==='0' || sMin[0]==='0'|| sHour[0]==='0'|| sDay[0]==='0'|| sMonth[0]==='0'|| sYear[0]==='0'
        || sSec[0]===' ' || sMin[0]===' '|| sHour[0]===' '|| sDay[0]===' '|| sMonth[0]===' '|| sYear[0]===' ' )
        {
           setErrorNotnumberRo("Eroare: Introduceti numere valide");
           setErrorNotnumberEn("Error: Insert valid numbers");
        }
        else
        {
            if(sSec[0] === '-' ||sMin[0] === '-' ||sHour[0] === '-' ||sDay[0] === '-' ||sMonth[0] === '-' ||sYear[0] === '-')
            {
                setErrorNotPositiveEn("Error: Insert positive numbers");
                setErrorNotPositiveRo("Eroare: Introduceti numere pozitvie");
            }
            else
            {
                let sec = Number(sSec);
                let min = Number(sMin);
                let hour = Number(sHour);
                let day = Number(sDay);
                let month = Number(sMonth);
                let year = Number(sYear);
    
                if(Number.isInteger(sec) && Number.isInteger(min) && Number.isInteger(hour) && Number.isInteger(day) && Number.isInteger(month) && Number.isInteger(year))
                {
                   
                   let auxDate = new Date(dateFromDP1);
                  
                    auxDate= new Date(auxDate.setSeconds(sec + dateFromDP1.getSeconds()));
                    auxDate= new Date(auxDate.setMinutes(min + auxDate.getMinutes()));
                    auxDate= new Date(auxDate.setHours(hour + auxDate.getHours()));
                    auxDate= new Date(auxDate.setDate(day + auxDate.getDate()));
                    auxDate= new Date(auxDate.setMonth(month + auxDate.getMonth()));
                    auxDate= new Date(auxDate.setFullYear(year + auxDate.getFullYear()));
                  
                   setDateFromDP2(auxDate);
                   
                }
                else
                {  
                    setErrorNotNaturalEn("Error: Insert integers");
                    setErrorNotNaturalRo("Eroare: Introduceti numere intregi");
                }
            }
        }
            
        
    }
    
    if(dateFromDP2 && dateFromDP1)
    {
        if(dateFromDP1.getTime() > dateFromDP2.getTime())
            compareDateVariable='>'
        else
            if (dateFromDP1.getTime() < dateFromDP2.getTime())
                compareDateVariable='<'
            else
                compareDateVariable='='
   }
    
   const getDiff = () =>
   {
    
        let auxDate = new Date();
        auxDate.setSeconds(1);
        auxDate.setMinutes(0);
        auxDate.setHours(0);
        auxDate.setDate(1);
        auxDate.setMonth(0);
        auxDate.setFullYear(0);

        let difInS;
        if(dateFromDP2 > dateFromDP1)
        {
            difInS = (dateFromDP2.getTime() - dateFromDP1.getTime()) / 1000;
        }
        else
        {
            difInS = (dateFromDP1.getTime() - dateFromDP2.getTime()) / 1000;
        }

        auxDate.setSeconds(difInS + auxDate.getSeconds());

        setDiffSec (auxDate.getSeconds()-1);
        setDiffMin (auxDate.getMinutes());
        setDiffHour (auxDate.getHours());
        setDiffDay (auxDate.getDate() - 1); 
        setDiffMonth (auxDate.getMonth());
        setDiffYear(auxDate.getFullYear());
        bGetDiffPress = 1;
    }
   

    return ( 
        <div>
        
        <Button label={bTextSL} onClick={ () =>{ changeL() } }/>
            
            <div className="p-fluid p-grid p-formgrid">
                <div className="p-field p-col-12 p-md-4">
                    <label htmlFor="time24">{chooseD1}</label>
                    <Calendar
                        id="time24"
                        locale={locale}
                        value={dateFromDP1} 
                        onChange={(e) => setDateFromDP1(e.value)} 
                        showTime 
                        showSeconds />
                </div>
            </div>

            <div className="p-fluid p-grid p-formgrid">
                <div className="p-field p-col-12 p-md-4">
                    <label htmlFor="time24">{chooseD2}</label>
                    <Calendar
                        id="time24"
                        value={dateFromDP2}
                        locale={locale}
                        onChange={(e) => setDateFromDP2(e.value)} 
                        showTime 
                        showSeconds />
                </div>
            </div>
            
            
           
            {
                dateFromDP1 && <div>
                            {
                                locale === 'en' && <div>
                                                    <p> 
                                                        {dateText} {dateFromDP1.getDate()} {months[dateFromDP1.getMonth()]} {dateFromDP1.getFullYear()} {dateFromDP1.getHours()}:{dateFromDP1.getMinutes()}:{dateFromDP1.getSeconds()} 
                                                    </p>
                                                    <p>
                                                        {dateUtcText}: {dateFromDP1.getUTCDate()} {months[dateFromDP1.getUTCMonth()]} {dateFromDP1.getUTCFullYear()} {dateFromDP1.getUTCHours()}:{dateFromDP1.getUTCMinutes()}:{dateFromDP1.getUTCSeconds()} 
                                                    </p>
                                                </div>
                            }
                            {
                                locale === 'ro' && <div>
                                                    <p> 
                                                        {dateText} {dateFromDP1.getDate()} {luni[dateFromDP1.getMonth()]} {dateFromDP1.getFullYear() }  {dateFromDP1.getHours()}:{dateFromDP1.getMinutes()}:{dateFromDP1.getSeconds()}
                                                    </p>
                                                    <p>
                                                    {dateUtcText}: {dateFromDP1.getUTCDate()} {luni[dateFromDP1.getUTCMonth()]} {dateFromDP1.getUTCFullYear()} {dateFromDP1.getUTCHours()}:{dateFromDP1.getUTCMinutes()}:{dateFromDP1.getUTCSeconds()}
                                                    </p>
                                                </div>
                            }

                        <br></br>
                        <table>
                            <tr>
                                <td><Button label={bTextCA} onClick={ () =>{ age() } }/> </td>
                                    {majorPerson && locale==='ro' && <td> {persMajora} </td>}
                                    {majorPerson && locale==='en' && <td> {majorPerson} </td>}
                                
                            </tr>
                        </table>
                        
                            
                            
                        <br></br>
                        
                            {
                                (new Date()).getTime() > dateFromDP1.getTime() && 
                                <div>
                                <table>
                                    <tr>
                                        <td><Button label={textBGetAge} onClick = { () => {getPersAge()} } /></td>
                                        <td>
                                             {
                                                (ageYear !== 0 || ageMonth !== 0 || ageDay !== 0 || ageMin !== 0 || ageHour !== 0 || ageSec !== 0 ) && 
                                                    <div>
                                                        <table>
                                                            <tr>
                                                                <td>{textAge}</td>
                                                                {ageYear !==0 && <td>{ageYear} {textYear} </td>}
                                                                {ageMonth !==0 && <td>{ageMonth} {textMonth}</td>}
                                                                {ageDay !==0 && <td>{ageDay} {textDay}</td>}
                                                                {ageHour !== 0  && <td>{ageHour} {textHour}</td>}
                                                                {ageMin !== 0 && <td>{ageMin} {textMin}</td>}
                                                                {ageSec !==0 && <td> {ageSec} {textSec}</td>}
                                                            </tr>
                                                        </table>
                                                    </div>
                                            }
                                        </td>
                                    </tr>
                                </table>
                                    
                                   
                                   

                            </div>
                            }

                        

                        <br></br>
                        <table>
                            <tr>
                                <td><Button label="Timestamp" onClick={ () => { getTimestamp() }}/></td>
                                <td> {timestamp}  </td>
                            </tr>
                        </table>
                            
                            

                        <br></br>
                            {
                                locale === 'en' && 
                                    <div> 
                                        { errorNotNaturalEnn && <p> {errorNotNaturalEnn}</p> }
                                        { errorNotNumberEn && <p> {errorNotNumberEn} </p> }
                                        { errorNotPositiveEn && <p> {errorNotPositiveEn} </p>}
                                    </div>
                            }
                            {
                                locale === 'ro' &&
                                    <div>
                                        { errorNotNaturalRo && <p> {errorNotNaturalRo}</p> }
                                        { errorNotNumberRo && <p> {errorNotNumberRo} </p> }
                                        { errorNotPositiveRo && <p> {errorNotPositiveRo} </p>} 
                                    </div>
                            }
                            <InputText onChange={event => setSSec(event.target.value)} placeholder={textSetSec}/>
                            <InputText onChange={event => setSMin(event.target.value)} placeholder={textSetMin}/>
                            <InputText onChange={event => setSHour(event.target.value)} placeholder={textSetHour}/>
                            <InputText onChange={event => setSDay(event.target.value)} placeholder={textSetDay}/>
                            <InputText onChange={event => setSMonth(event.target.value)} placeholder={textSetMonth}/>
                            <InputText onChange={event => setSYear(event.target.value)} placeholder={textSetYear}/>
                            <Button label={textBGetSecDate} onClick={ () => {getSecondDate() }} />
                            
                            <br></br>
                            <small> {textInstructions}</small>
                          
                        <br></br>
                        {
                            dateFromDP2 &&
                                <div>
                                    {
                                        locale==='en' && <p> 
                                        {dateFromDP1.getDate()} {months[dateFromDP1.getMonth()]} {dateFromDP1.getFullYear() } {dateFromDP1.getHours()}:{dateFromDP1.getMinutes()}:{dateFromDP1.getSeconds()}
                                    
                                        {' ' + compareDateVariable + ' '} 
                                        {dateFromDP2.getDate()} {months[dateFromDP2.getMonth()]} {dateFromDP2.getFullYear()} {dateFromDP2.getHours()}:{dateFromDP2.getMinutes()}:{dateFromDP2.getSeconds()}
                                    </p>
                                    }
                                    {
                                         locale==='ro' && <p> 
                                         {dateFromDP1.getDate()} {luni[dateFromDP1.getMonth()]} {dateFromDP1.getFullYear() } {dateFromDP1.getHours()}:{dateFromDP1.getMinutes()}:{dateFromDP1.getSeconds()}
                                     
                                         {' ' + compareDateVariable + ' '} 
                                         {dateFromDP2.getDate()} {luni[dateFromDP2.getMonth()]} {dateFromDP2.getFullYear()} {dateFromDP2.getHours()}:{dateFromDP2.getMinutes()}:{dateFromDP2.getSeconds()}
                                     </p>
                                    }
                                    

                                    <Button label={bTextGetDiff} onClick={ () => {getDiff()}}/>
                                   
                                    {
                                        (diffYear !== 0 || diffMin !==0 || diffDay !==0 || diffHour !== 0 || diffMin !== 0 || diffSec !== 0) &&
                                        <div>
                                            <table>
                                                <tr>
                                                    {diffYear !==0 && <td>{diffYear} {textYear}</td>}
                                                    {diffMonth !==0  && <td>{diffMonth} {textMonth} </td>}
                                                    {diffDay !==0 && <td>{diffDay} {textDay}</td>}
                                                    {diffHour !==0 && <td>{diffHour} {textHour}</td>}
                                                    {diffMin !==0 && <td>{diffMin} {textMin}</td>}
                                                    {diffSec !==0 && <td>{diffSec} {textSec}</td>}
                                                </tr>
                                            </table>
                                            
                                        </div>
                                    }
                                    {
                                       (! (diffYear !== 0 || diffMin !==0 || diffDay !==0 || diffHour !== 0 || diffMin !== 0 || diffSec !== 0)) && bGetDiffPress === 1 &&
                                        <div>
                                            <p> {textDateEq} </p>
                                        </div>
                                    }
                                </div>
                        } 
                               

                    </div>
            }

            
            
    </div>
    );
}
 
export default PrincipalComp;