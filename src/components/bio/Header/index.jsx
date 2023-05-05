import TypeIt from "typeit-react";
import "./header.scss";

function Header() {
  return (
    <header className="bioHeader">
      <p>
        Design
        <TypeIt options={{speed: 200, loop: true}}
          getBeforeInit={(instance) => { 
            instance
            .type(" <span class='red-text'> bonito não vende.</span>").pause(750).delete().pause(1000)
            .type(" <span class='green-text'> com estratégia VENDE!!</span>").pause(750)
            
          return instance;
          }}
        />
      </p>
    </header>
  );
}

export default Header;
