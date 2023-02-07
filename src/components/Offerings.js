import React from "react";
import "./Offerings.css";

function Offerings() {
  return (
    <>
      <p>
        I want to provide your child with the best Preschool experience
        possible. Because of this, I have certifications and activities not
        offered by other preschool programs. This includes:
      </p>

      {/* • */}
      <ul id="offerings-list">
        <div className="row">
          <li className="col item">
            • A Play-Based curriculum that meets Colorado State Standards
          </li>
          <li className="col item">• A daily short Bible devotional</li>
        </div>
        <div className="row">
          <li className="col item">
            • Family involvement activities several times per year
          </li>
          <li className="col item">• Cooking and science exploration</li>
        </div>
        <div className="row">
          <li className="col item">
            • Nutritious snack for my morning class provided by my program
          </li>
          <li className="col item">
            • Community involvement through special guest presenters.
          </li>
        </div>
        <div className="row">
          <li className="col item">
            • Fun and inviting learning space in my home basement
          </li>
          <li className="col item">
            • Small class size with a ratio of six students to one teacher.
          </li>
        </div>
      </ul>

      <p>
        With all this, I am licensed with the State of Colorado for Permanent
        Child Care Provider. My license number is #1711173 which can be
        confirmed with the State.
      </p>

      {/* *Play based curriculum that meets Colorado state standards. *Daily short bible devotional. *Family involvement activities several times per year. *Cooking and science exploration. *Nutritious morning snack provided by my program. PLEASE HAVE YOUR CHILD BRING A COLD OR MICROWAVABLE LUNCH. *Community involvement through special guest presenters. *Fun and inviting learning space in my home basement. Students will need to navigate stairs independently. *Small class size. Ratio six students to one teacher.
      
      License # 1711173
      
      Morning Snack,Lunch*/}
    </>
  );
}

export default Offerings;
