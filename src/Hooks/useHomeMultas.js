import { useState, useEffect } from "react";

const useHomeMultas = () => {
  const uri = "http://localhost:8762/ms-multa/multa";
  const [multa, setMulta] = useState(0);
  const [multasMeses, setMultasMeses] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);

  useEffect(() => {
    let enero2 = [];
    let febrero2 = [];
    let marzo2 = [];
    let abril2 = [];
    let mayo2 = [];
    let junio2 = [];
    let julio2 = [];
    let agosto2 = [];
    let septiembre2 = [];
    let octubre2 = [];
    let noviembre2 = [];
    let diciembre2 = [];
    let multasLine = [];

    let year = new Date().getFullYear();
    let elementos = [];

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetMethod: "GET",
      }),
    };

    fetch(uri, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          const t = element.fecha.split("-");
          if (t[0] == year.toString() && element.pagado == true) {
            switch (t[1]) {
              case "01":
                enero2.push(element.total);
                break;
              case "02":
                febrero2.push(element.total);
                break;
              case "03":
                marzo2.push(element.total);
                break;
              case "04":
                abril2.push(element.total);
                break;
              case "05":
                mayo2.push(element.total);
                break;
              case "06":
                junio2.push(element.total);
                break;
              case "07":
                julio2.push(element.total);
                break;
              case "08":
                agosto2.push(element.total);
                break;
              case "09":
                septiembre2.push(element.total);
                break;
              case "10":
                octubre2.push(element.total);
                break;
              case "11":
                noviembre2.push(element.total);
                break;
              case "12":
                diciembre2.push(element.total);
                break;
            }
            elementos.push(element.total);
          }
        });
        setMulta(elementos.reduce((a, b) => a + b, 0));        
        
     setMultasMeses([
      enero2.reduce((a, b) => a + b,0),
      febrero2.reduce((a, b) => a + b,0),
      marzo2.reduce((a, b) => a + b,0),
      abril2.reduce((a, b) => a + b,0),
      mayo2.reduce((a, b) => a + b,0),
      junio2.reduce((a, b) => a + b,0),
      julio2.reduce((a, b) => a + b,0),
      agosto2.reduce((a, b) => a + b,0),
      septiembre2.reduce((a, b) => a + b,0),
      octubre2.reduce((a, b) => a + b,0),
      noviembre2.reduce((a, b) => a + b,0),
      diciembre2.reduce((a, b) => a + b,0)
    ]);

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
      }, []);

    
  });

  return {
    multa,
    multasMeses,
  };
};

export { useHomeMultas };
