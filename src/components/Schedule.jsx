import React from "react";

const Schedule = () => {
  return (
    <>
      <center>
        <table className="schedule">
          <thead className="schedhead">
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr className="schedlevel1">
              <td className="Calculus">CS-2300</td>
              <td className=" ">CS-2300</td>
              <td className="Calculus">CS-2300</td>
              <td className=" ">CS-2300</td>
              <td className="worksched" colSpan="3" rowSpan="4">
                Work 8:30am - 6pm
              </td>
            </tr>
            <tr className="schedlevel2">
              <td className="Data Privacy and Security">CS-2370</td>
              <td className=" ">CS-2370</td>
              <td className="Data Privacy and Security">CS-2370</td>
              <td className=" ">CS-2370</td>
            </tr>
            <tr className="schedlevel3">
              <td className="Computer Network 1">CS-2550</td>
              <td className=" ">CS-2550</td>
              <td className="Computer Network 1">CS-2550</td>
              <td className=" ">CS-2550</td>
            </tr>
            <tr className="schedlevel4">
              <td className="Global Society Ethnicy">CS-2370</td>
              <td className=" ">CS-2370</td>
              <td className="Global Society Ethnicy">CS-2550</td>
              <td className=" ">CS-2300</td>
            </tr>
          </tbody>
        </table>
      </center>
    </>
  );
};

export default Schedule;
