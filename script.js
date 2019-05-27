myApp = {};

myApp.key = 'a91fee1758c5c0c609f0db4a9ef6b8d933bdfbae';

$(document).ready(() => {
    // event listener on country dropdown
    $('#country').on('change', function () {
        chosenCountry = $(`#country option:selected`).val();
        // if Canada is chosen, display the dropdown for Canadian provinces. If the US had been selected earlier, remove the US state dropdown.
        if ((chosenCountry) === 'ca') {
            $('#CaStateForm').removeClass('displayNoneCA');
            $('#CaStateForm').addClass('displayCA');
            $('#USStateForm').removeClass('displayUS');
            $('#USStateForm').addClass('displayNoneUS');
        // if the US is chosen, display the dropdown for US states. If Canada had been chosen earlier, remove the Canadian province dropdown.
        } else if ((chosenCountry) === 'us') {
            $('#USStateForm').removeClass('displayNoneUS');
            $('#USStateForm').addClass('displayUS');
            $('#CaStateForm').removeClass('displayCA');
            $('#CaStateForm').addClass('displayNoneCA');
        // if another country is chosen, make sure the US and Canada dropdowns are not displaying.
        } else {
            $('#USStateForm').removeClass('displayUS');
            $('#USStateForm').addClass('displayNoneUS');
            $('#CaStateForm').removeClass('displayCA');
            $('#CaStateForm').addClass('displayNoneCA');
        }
    })
    
    // event listener on the submit button
    $('.submit').on('click', function () {
        //capturing the value of the country the user selected
        const chosenCountry = $(`#country option:selected`).val();
        // capturing the value of the state selected
        const chosenState = $(`#state option:selected`).val();
        // info needed to make today's date the default date input for the API call
        const today = new Date();
        const currentDate = today.getDate();
        const currentMonth = today.getMonth()+1;
        const currentYear = today.getFullYear();
        const currentDayOfWeek = today.getDay();
        const currentHours = today.getHours();

        myApp.getHolidays = (chosenCountry, chosenState) => {
            // making the API call for national holidays using the country input from the user and the current date
            $.ajax({
                url: `https://calendarific.com/api/v2/holidays`,
                method: `GET`,
                dataType: `json`,
                data: {
                    api_key: myApp.key,
                    country: chosenCountry,
                    year: currentYear,
                    day: currentDate,
                    month: currentMonth,
                    location: chosenState,
                    type: 'national'
                },
            }).then(function (results) {
                const currentHoliday = (results.response.holidays);
                // error handling for no user input
                if (chosenCountry === '') {
                    $('h2').text('Please enter a location!');
                } 
                // there's no public holiday AND it's a weekday, so they are working
                else if (currentHoliday.length === 0 && currentDayOfWeek !== 6 && currentDayOfWeek !== 0) {
                    console.log(`they are working - no holiday and weekday`);
                    $('h2').text('Yes!')
                }
                // there's no public holiday but it's a weekend, so they're not working
                else if (currentHoliday.length === 0 && currentDayOfWeek !== 1 && currentDayOfWeek !== 2 && currentDayOfWeek !== 3 && currentDayOfWeek !== 4 && currentDayOfWeek !== 5) {
                    console.log(`theres no holiday but it IS a weekend`);
                    $('h2').text(`Nope, it's the weekend!`)
                    $('body').addClass('backgroundAnimated');
                }
                // there is a public holiday, so they're not working (+ display the holiday name)
                else {
                    console.log(`theres a holiday`);
                    $('h2').text(`Nope, it's ${currentHoliday[0].name}!`);
                }
            }).catch((error) => {
                console.log('error!!!');
            })
        }
        myApp.getHolidays(chosenCountry, chosenState);
        })
    })
