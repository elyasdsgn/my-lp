import TypeIt from "typeit-react";
import "./header.scss";

function Header() {
  return (
    <header className="bioHeader">
      <p>
        Designer
        <TypeIt options={{speed: 200, loop: true}}
          getBeforeInit={(instance) => { 
            instance
            .type(" <span class='red-text'> bonito NÃO vende.</span>").pause(750).delete().pause(1000)
            .type(" <span class='green-text'> estratégico VENDE!!</span>").pause(750)
            
          return instance;
          }}
        />
      </p>
    </header>
  );
}

export default Header;
