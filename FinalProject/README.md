#Final Project
##The Student Home Contact Web App

This web app is meant to support and facilitate meaningful home outreach by New Visions for Public School's school staff.  The tool allows users to quickly lookup student home contact information, log any details related to their outreach efforts, and view previously logged outreach details.  

####Navigation
Users can navigate to a particular student by selecting them from the dropdown list, or they can cycle through all students by click the 'next' or 'previous' buttons.

####Home contact details
The app makes accessible the official home contact information on record in the Dept. of Education's ATS data portal.

Users can additionally add meta data to the official ATS records (i.e. flag phone number as bad, flag a number as being associated with a mobile device, add an email address, etc.) and add entirely new contacts that will be stored in parallel with the official ATS data.

Clicking the pencil icon will open a modal dialog allowing for edits to contact details. Clicking the blue "+ New Contact" button will let you create a new contact.

####Outreach logging
Users can categorize the outreach type (attendance, discipline, etc.), log the method of outreach (phone, email, in-person), record notes, and other details related to the outreach they are currently conducting.  The username of the user and a timestamp will automatically get logged as well.

####Outreach history
To provide context to the user prior to and during the outreach effort the history of all previously logged outreach for is made available under the "Outreach History" tab.

####Relevant data (Coming soon!)
Eventually, data relevant to an outreach category will be teed up under the "Student Data" tab to better inform the outreach.  For example, a students attendance history over the year to date could be made available when "attendance" is selected as the outreach category.

___

###Technical Details
######Routes/states

One File: index.route.js
- master
- master.content
- master.content.logOutreach
- master.content.outreachHistory
- master.content.studentData


######ng Built In Directives
-$scope
-$log
-$state
-$q
-$modal (from angular-bootstrap)

######Custom directives 
-jcContactEditButton.directive.js
-jcDialerButton.directive.js
-jcOutreachLog.directive.js
-jcContact.directive.js
-jcStudentNav.directive.js

######Custom services
-contact.service.js
-data.service.js
-student.service.js
-NewContact.factory.js

######$resource factories
-OutreachLogsResource.service.js
-StudentResource.service.js
*These are currently loading .json files, but will be swapped out with an API call when the API is complete

######Forms
-log.view.html
-jcContactEditInstance.html

######Unit Tests
-contact.service.spec.js
*I struggled to get meaningful unit tests implemented beyond the ContactService, which was straighforward.  Most of my controllers are tied to directives, and I couldn't figure out how to pass in the variables that get passed in through the markup.
