import React from "react";
import "./Offerings.css";

function Offerings() {
  return (
    <>
      <p>
        I want to provide your child with an exceptional Preschool experience.
        Leaps & Bounds Preschool highlights include:
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
            • Nutritious morning snack consisiting of fruits, vegetables, whole
            grains and/or lean proteins.
          </li>
          <li className="col item">
            • Community involvement through special guest presenters.
          </li>
        </div>
        <div className="row">
          <li className="col item">
            • Fun and inviting indoor and outdoor learning spaces.
          </li>
          <li className="col item">
            • Small class size with a ratio of six students to one teacher.
          </li>
        </div>
      </ul>

      <p>
        I am a licensed family childcare provider with the State of Colorado
        (license #1711173) providing care and education exclusively to
        preschool-age children.
      </p>

      {/* *Play based curriculum that meets Colorado state standards. *Daily short bible devotional. *Family involvement activities several times per year. *Cooking and science exploration. *Nutritious morning snack provided by my program. PLEASE HAVE YOUR CHILD BRING A COLD OR MICROWAVABLE LUNCH. *Community involvement through special guest presenters. *Fun and inviting learning space in my home basement. Students will need to navigate stairs independently. *Small class size. Ratio six students to one teacher.
      
      License # 1711173
      
      Morning Snack,Lunch*/}
    </>
  );
}

export default Offerings;
