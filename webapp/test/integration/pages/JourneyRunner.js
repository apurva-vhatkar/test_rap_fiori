sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"mt/ab/managetravel/test/integration/pages/TravelList.gen",
	"mt/ab/managetravel/test/integration/pages/TravelObjectPage.gen",
	"mt/ab/managetravel/test/integration/pages/BookingObjectPage.gen"
], function (JourneyRunner, TravelListGenerated, TravelObjectPageGenerated, BookingObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('mt/ab/managetravel') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelListGenerated: TravelListGenerated,
			onTheTravelObjectPageGenerated: TravelObjectPageGenerated,
			onTheBookingObjectPageGenerated: BookingObjectPageGenerated
        },
        async: true
    });

    return runner;
});

