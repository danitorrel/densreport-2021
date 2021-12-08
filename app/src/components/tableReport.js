//import { responsive } from 'react-bootstrap/'
import "../index.css";
import { Table } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

function TableReport() {
  return (
    <div className="table" responsive="lg">
      <form className="reportForm">
        <select className="workshift">
          <option className="workshiftTittle">Turno</option>
          <option className="t1">1</option>
          <option className="t2">2</option>
          <option className="t3">3</option>
        </select>

        <select className="cell">
          <option className="cellTittle">Celda</option>
          <option className="c1">1</option>
          <option className="c2">2</option>
          <option className="c3">3</option>
          <option className="c4">4</option>
          <option className="c5">5</option>
          <option className="c6">6</option>
          <option className="c7">7</option>
          <div className="date">Aqui va la fecha</div>
        </select>

        <input type="date" />

        <Table responsive="lg" bordered>
          <thead>
            <tr cope="row">
              <th> Proceso</th>
              <th>Producción</th>
              <th>Wip</th>
              <th>Tiempo Muerto</th>
              <th>N. Operadores</th>
            </tr>
          </thead>
          <tbody className="table-light">
            <tr className="Thermoforming">
              <th>Thermoforming</th>
              <td className="ThermoProd">
                <input className="ThermoProd" type="number" />
              </td>
              <td className="ThermoWip">
                <input className="ThermoWip" type="number" />
              </td>
              <td className="ThermoTM">
                <input className="ThermoTM" type="number" />
              </td>
              <td className="ThermoOpera">
                <input className="ThermoOpera" type="number" />
              </td>
            </tr>

            <tr className="LaserMarking">
              <th>Laser Marking</th>
              <td className="LaserMProd">
                <input className="LaserMProd" type="number" />
              </td>
              <td className="LaserMWip">
                <input className="LaserMWip" type="number" />
              </td>
              <td className="LaserMTM">
                <input className="LaserMTM" type="number" />
              </td>
              <td className="LaserMOpera">
                <input className="LaserMOpera" />
              </td>
            </tr>

            <tr className="LaserTrimming">
              <th>Laser Trimming</th>
              <td className="LaserTProd">
                <input className="LaserTProd" type="number" />
              </td>
              <td className="LaserTWip">
                <input className="LaserTWip" type="number" />
              </td>
              <td className="LaserTTM">
                <input className="LaserTTM" type="number" />
              </td>
              <td className="LaserTOpera">
                <input className="LaserTOpera" type="number" />
              </td>
            </tr>

            <tr className="Buffing">
              <th>Buffing</th>
              <td className="BuffingProd">
                <input className="BuffingProd" type="number" />
              </td>
              <td className="BuffingWip">
                <input className="BuffingWip" type="number" />
              </td>
              <td className="BuffingTM">
                <input className="BuffingTM" type="number" />
              </td>
              <td className="BuffingOpera">
                <input className="BuffingOpera" type="number" />
              </td>
            </tr>

            <tr className="QC&wash">
              <th>QC&wash</th>
              <td className="QC&washProd">
                <input className="QCProd" type="number" />
              </td>
              <td className="QC&washWip">
                <input className="QChWip" type="number" />
              </td>
              <td className="QC&washTM">
                <input className="QCTM" type="number" />
              </td>
              <td className="QC&washOpera">
                <input className="QCOpera" type="number" />
              </td>
            </tr>

            <tr className="BagandBox">
              <th>Bag and Box</th>
              <td className="BagandBoxProd">
                <input className="BagandBoxProd" type="number" />
              </td>
              <td className="BagandBoxhWip">
                <input className="BagandBoxhWip" type="number" />
              </td>
              <td className="BagandBoxTM">
                <input className="BagandBoxTM" type="number" />
              </td>
              <td className="BagandBoxOpera">
                <input className="BagandBoxOpera" type="number" />
              </td>
            </tr>
          </tbody>
        </Table>

        <button className="send">Enviar</button>
      </form>
    </div>
  );
}

export default TableReport;
