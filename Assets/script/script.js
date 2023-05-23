function typeString(str, delay) {
        let index = 0;
        const output = document.getElementById("output");
        function writeCharacter() {
          if (index < str.length) {
            output.innerHTML += str.charAt(index);
            index++;
            setTimeout(writeCharacter, delay);
          }
        }
        writeCharacter();
  }
  
  function autoString(str, delay) {
        let index = 0;
        const fOutput = document.getElementById("f-output");
        function writeCharacter() {
          if (index < str.length) {
            fOutput.innerHTML += str.charAt(index);
            index++;
            setTimeout(writeCharacter, delay);
          }
        }
        writeCharacter();
  }
  
  autoString("Website Developer",250)
  
      (typeString('Hi there, my name is Ahmadu Samuel Egin and i\'m a Frontend developer with one year of experience in the field, i have a passion for creating clean, functional and visually appealing websites. My expertise lies in HTML, CSS and JavaScript which allows me to bring designs to life and create intituve user interfaces. I have experience working on both large and small projects, from single-page websites to complex web applications. I believe in the importance of staying up-to-date with the latest technologies and experimenting with new design and development techniques. I also enjoy staying active and spending time indoors.',30))