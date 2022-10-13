# “Voyage progress” React component
React component, which shows roughly how far the ferry is along its’ path.

## PROPS
- portOfLoading - string - e.g. Karlshamn
- portOfDischarge - string - e.g. Klaipeda
- departureTime - string | Date
- arrivalTime - string | Date

## DESCRIPTION
The challenge should be completed using React, Typescript and styled in emotion.sh.

The position of the “pin” along the voyage axis should be based on the difference between the departure time, current time and arrival time, for example, if the ferry departs at 8:00 and arrives at 13:00, and it is 10:00 right now, the pin should be placed 40%.

The pin should appear at the port of loading if it is not departure time yet, or at the port of discharge, if it is already past arrival time. Dots should only appear in dark blue, if the pin has moved past the center of that dot in the axis to the right.

The component should have a minimum of the following tests:
- Renders port names
- Renders correct number of blue dots at a given progress
- Renders pin at the correct position.

## Status
- in progress - bugs to fix on cleanup any pin before update
- deployed to gitlab pages - non interactive
- hardcoded values below have to be edited in order to see the progress automatically adjust:
    - L18:     departureTime= "08:00:00", //Change
    - L19:     arrivalTime= "13:00:00", //Change
    - L23:     const currentTime = "12:00:00"; //Change 