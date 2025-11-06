// This is to get the time when posted and format it so it's a bit easier to read. This is for the sample database but is used again in the message post below. /

function getNewDate() {
  const sampleDateGrab = new Date();
  const sampleHours = sampleDateGrab.getHours();
  const sampleMinutes = sampleDateGrab.getMinutes();
  const sampleMonth = sampleDateGrab.getMonth() + 1;
  const sampleDay = sampleDateGrab.getDate();
  const sampleYear = sampleDateGrab.getFullYear();
  const sampleDate = `${sampleHours}:${sampleMinutes} - ${sampleMonth}/${sampleDay}/${sampleYear}`;
  return sampleDate;
}

module.exports = getNewDate;
