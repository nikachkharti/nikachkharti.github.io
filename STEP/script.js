let studentsArray =
    [
        { firstName: "გიორგი", lastName: "გიორგაძე", age: 26, signUpDate: '20/09/2020', course: 'Javascript', attendence: 97, grant: true, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },
        
        { firstName: "დავით", lastName: "დავითაძე", age: 19, signUpDate: '22/01/2019', course: 'C#', attendence: 40, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },
        
        { firstName: "ირაკლი", lastName: "ირაკლიშვილი", age: 18, signUpDate: '01/09/2019', course: 'C#', attendence: 20, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },
        
        { firstName: "შოთა", lastName: "შოთაშვილი", age: 21, signUpDate: '01/07/2019', course: 'C#', attendence: 28, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },
        
        { firstName: "ილია", lastName: "ილურიძე", age: 21, signUpDate: '12/11/2019', course: 'Javascript', attendence: 51, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },
        
        { firstName: "ნიკოლოზ", lastName: "ჩხარტიშვილი", age: 26, signUpDate: '12/11/2019', course: 'C#', attendence: 100, grant: true, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },
        
        { firstName: "შალვა", lastName: "ნათელაშვილი", age: 22, signUpDate: '18/05/2019', course: 'C++', attendence: 61, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },
        
        { firstName: "ელენე", lastName: "ელენიძე", age: 27, signUpDate: '20/09/2020', course: 'C++', attendence: 94, grant: true, avatar: 'https://media.istockphoto.com/photos/young-african-woman-smiling-at-sunset-picture-id969233490?k=6&m=969233490&s=612x612&w=0&h=3UW-GHQ2CksIelqKk0UKgy_7qExPsn1g8B2Q0zzU1xo=' },
        
        { firstName: "ჯემალ", lastName: "ბაღაშვილი", age: 40, signUpDate: '21/10/2019', course: 'C++', attendence: 69, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },

        { firstName: "გია", lastName: "ბაღაშვილი", age: 18, signUpDate: '21/10/2019', course: 'C#', attendence: 69, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },

        { firstName: "ედუარდ", lastName: "შევარდნაძე", age: 32, signUpDate: '23/12/2019', course: 'Javascript', attendence: 81, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },

        { firstName: "ზვიად", lastName: "გამსახურდია", age: 32, signUpDate: '23/08/2019', course: 'C++', attendence: 4, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },

        { firstName: "მარიამ", lastName: "მეგრელიშვილი", age: 18, signUpDate: '07/07/2019', course: 'C#', attendence: 42, grant: false, avatar: 'https://media.istockphoto.com/photos/young-african-woman-smiling-at-sunset-picture-id969233490?k=6&m=969233490&s=612x612&w=0&h=3UW-GHQ2CksIelqKk0UKgy_7qExPsn1g8B2Q0zzU1xo=' },

        { firstName: "გიგა", lastName: "ბახტაძე", age: 26, signUpDate: '20/09/2020', course: 'C#', attendence: 28, grant: false, avatar: 'https://media.istockphoto.com/photos/portrait-of-a-smiling-student-at-the-city-street-picture-id1147289240?k=6&m=1147289240&s=612x612&w=0&h=EBUqpCRQz1s3ssDSuF0JBT0_22copoJKbZ7FNOxHr7c=' },
        
        { firstName: "ნინო", lastName: "ნინიძე", age: 33, signUpDate: '17/10/2019', course: 'Javascript', attendence:66, grant: false, avatar: 'https://media.istockphoto.com/photos/young-african-woman-smiling-at-sunset-picture-id969233490?k=6&m=969233490&s=612x612&w=0&h=3UW-GHQ2CksIelqKk0UKgy_7qExPsn1g8B2Q0zzU1xo=' },
        
        { firstName: "ხატია", lastName: "ხატიაშვილი", age: 24, signUpDate: '01/01/2019', course: 'Javascript', attendence: 79, grant: false, avatar: 'https://media.istockphoto.com/photos/young-african-woman-smiling-at-sunset-picture-id969233490?k=6&m=969233490&s=612x612&w=0&h=3UW-GHQ2CksIelqKk0UKgy_7qExPsn1g8B2Q0zzU1xo=' },
        
        { firstName: "მარიამ", lastName: "მარუაშვილი", age: 22, signUpDate: '20/09/2020', course: 'C++', attendence:23, grant: false, avatar: 'https://media.istockphoto.com/photos/young-african-woman-smiling-at-sunset-picture-id969233490?k=6&m=969233490&s=612x612&w=0&h=3UW-GHQ2CksIelqKk0UKgy_7qExPsn1g8B2Q0zzU1xo=' },
    ]

let studentsDataInHTML = document.getElementById('studentsDataInHTML');



// წამოიღებს ყველა სტუდენტს რომელსაც აქვს 100% დასწრება
function getHundredAttandence(dataSource)
{
    return dataSource.attendence === 100;
}
let hundredPercentAttandenceStudents = studentsArray.filter(getHundredAttandence);



// წამოიღებს ყველა სტუდენტს რომელიც სწავლობს C# ზე
function getCsharpStudents(dataSource)
{
    return dataSource.course === 'C#';
}
let cSharpStudents = studentsArray.filter(getCsharpStudents);



// წამოიღებს ყველა სტუდენტს რომელიც სწავლობს C++ ზე
function getCppStudents(dataSource)
{
    return dataSource.course === 'C++';
}
let cppStudents = studentsArray.filter(getCppStudents);


// წამოიღებს ყველა სტუდენტს რომელიც სწავლობს ჯავასკრიპტზე
function getJavascriptStudents(dataSource)
{
    return dataSource.course === 'Javascript';
}
let javascriptStudents = studentsArray.filter(getJavascriptStudents);

// წამოიღებს ყველა სტუდენტს რომელიც რეგისტრირებულია 20/09/2020 -ში
function getTwentyTwentyStudents(dataSource)
{
    return dataSource.signUpDate === '20/09/2020';
}
let twentyTwenty = studentsArray.filter(getTwentyTwentyStudents);


// წამოიღებს ყველა სტუდენტს რომელიც არის 22 წლის
function get22YearsOld(dataSource)
{
    return dataSource.age === 22;
}
let only22YearsOldStudents = studentsArray.filter(get22YearsOld);

//წამოიღებს მხოლოდ სტიპენდიანტ სტუდენტებს
function getGrantedStudents(dataSource)
{
    return dataSource.grant === true;
}
let studentsWithGrant = studentsArray.filter(getGrantedStudents);




//ამოწმებს სტუდენტებსი დასწრების რაოდენობას
function checkAttendence(attendence)
{
    if (attendence <= 25)
    {
        attendence=`<div class="progress-bar bg-danger" role="progressbar" style="width: ${attendence}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>`
    }
    else if(attendence >=25 && attendence <=50)
    {
        attendence=`<div class="progress-bar bg-warning" role="progressbar" style="width: ${attendence}%;" aria-valuenow="25" aria-valuemin="0"aria-valuemax="100"></div>`
    }

    else if (attendence >= 50 && attendence <= 70)
    {
        attendence=`<div class="progress-bar bg-info" role="progressbar" style="width: ${attendence}%;" aria-valuenow="25" aria-valuemin="0"aria-valuemax="100"></div>`
    }
    else
    {
        attendence=`<div class="progress-bar bg-success" role="progressbar" style="width: ${attendence}%;" aria-valuenow="25" aria-valuemin="0"aria-valuemax="100"></div>`
    }

    return attendence;
}


//ამოწმებს სტუდენტებს აქვთ თუ არა გრანტი
function checkGrant(grant)
{
    if (grant)
         grant = '<span class="badge rounded-pill bg-success">სტიპენდიანტი</span>';
    else
        grant ='<span class="badge rounded-pill bg-danger">არა სტიპენდიანტი</span>'
    
    return grant;
}


function fillTheCards(dataSource)
{
    studentsDataInHTML.innerHTML +=
        `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card Larger shadow position-relative border-0 mt-5 mb-3">
                    <img src="${dataSource.avatar}" class="card-img-top" alt="Not found">
                        <div class="card-body">
                            <h5 class="card-title mb-4">${dataSource.firstName} ${dataSource.lastName}</h5>

                            <div class="bg-white p-4 Small shadow">
                                <p class="card-text"><i class="bi bi-hourglass-split"></i> ${dataSource.age} წლის</p>
                                <p class="card-text"><i class="bi bi-calendar-range"></i> ${dataSource.signUpDate} </p>
                                <p class="card-text"><i class="bi bi-book"></i> ${dataSource.course} </p>
                                <p class="card-text position-absolute top-0 end-0">${checkGrant(dataSource.grant)}</p>
                                
                                <i class="bi bi-battery-charging fs-4"></i>
                                <div class="progress" style="height: 1px;">
                                        ${checkAttendence(dataSource.attendence)}
                                    </div>
                                    <div class="progress" style="height: 20px;">
                                        ${checkAttendence(dataSource.attendence)}
                                    </div>
                                </div>
                            <a href="#" class="btn btn-secondary text-white mt-5">დაწვრილებით</a>
                        </div>
                </div>
            </div>
        `
}



//წამოიღებს იმ სტუდენტებს რომლის სახელიც ემთხვევა
let searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', (e) => {
    studentsDataInHTML.innerHTML = '';

    const searchValue = e.target.value;
    const filteredStudents = studentsArray.filter(character =>
    {
        return character.firstName.includes(searchValue);
    });

    filteredStudents.forEach(fillTheCards);  //??????????????? კონსოლში პოულობს მაგრამ HTML ში ვერ გამოვატანინე !!!
    console.log(filteredStudents); 
});





//Switch რომელიც გადართვისას წამოიღებს მხოლოდ გრანტიანებს
let grantSwitch = document.getElementById('flexSwitchCheckDefault');
let grantSwitchLabel = document.getElementById('stipendSwitchLabel');

grantSwitch.addEventListener("change", function(e)
{
    studentsDataInHTML.innerHTML = '';
    if (this.checked)
    {
        studentsWithGrant.forEach(fillTheCards);
        grantSwitchLabel.innerText = 'ყველა სტუდენტი';
    }
    else
    {
        studentsArray.forEach(fillTheCards);
        grantSwitchLabel.innerText = 'მხოლოდ სტიპენდიანტები';
    }
});




// Checkbox მხოლოდ ჯავასკრიპტის სტუდენტებისთვის
let onlyJsStudents = document.getElementById('onlyJS');
onlyJsStudents.addEventListener("change", (e) => {
    studentsDataInHTML.innerHTML = '';
    if (onlyJsStudents.checked)
    {
        javascriptStudents.forEach(fillTheCards);
    }
    else
    {
        studentsArray.forEach(fillTheCards);
    }
});

// Checkbox მხოლოდ C# სტუდენტებისთვის
let onlyCsharpStudents = document.getElementById('onlyCsharp');
onlyCsharpStudents.addEventListener("change", (e) => {
    studentsDataInHTML.innerHTML = '';
    if (onlyCsharpStudents.checked)
    {
        cSharpStudents.forEach(fillTheCards);
    }
    else
    {
        studentsArray.forEach(fillTheCards);
    }
});

// Checkbox მხოლოდ C++ სტუდენტებისთვის
let onlyCppStudents = document.getElementById('onlyCpp');
onlyCppStudents.addEventListener("change", (e) => {
    studentsDataInHTML.innerHTML = '';
    if (onlyCppStudents.checked)
    {
        cppStudents.forEach(fillTheCards);
    }
    else
    {
        studentsArray.forEach(fillTheCards);
    }
});



studentsArray.forEach(fillTheCards); 




