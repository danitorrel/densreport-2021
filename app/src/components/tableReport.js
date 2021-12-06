function TableReport() {

    return (
        <div className='table'>
            <form className='reportForm'>

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


                <select className="workshift">
                    <option className="workshiftTittle">Turno</option>
                    <option className="t1">1</option>
                    <option className="t2">2</option>
                    <option className="t3">3</option>
                </select>


                <table className='tableReport'>
                    <tr cope="row">
                        <th> Proceso</th>
                        <th>Producción</th>
                        <th>Wip</th>
                        <th>Tiempo Muerto</th>
                        <th>N. Operadores</th>
                    </tr>

                    <tr className="Thermoforming">
                        <th>Thermoforming</th>
                        <td className="ThermoProd"><input className="ThermoProd" /></td>
                        <td className="ThermoWip"><input className="ThermoWip" /></td>
                        <td className="ThermoTM"><input className="ThermoTM" /></td>
                        <td className="ThermoOpera"><input className="ThermoOpera" /></td>
                    </tr>

                    <tr className="LaserMarking">
                        <th>Laser Marking</th>
                        <td className="LaserMProd"><input className="LaserMProd" /></td>
                        <td className="LaserMWip"><input className="LaserMWip" /></td>
                        <td className="LaserMTM"><input className="LaserMTM" /></td>
                        <td className="LaserMOpera"><input className="LaserMOpera" /></td>
                    </tr>

                    <tr className="LaserTrimming">
                        <th>LLaser Trimming</th>
                        <td className="LaserTProd"><input className="LaserTProd" /></td>
                        <td className="LaserTWip"><input className="LaserTWip" /></td>
                        <td className="LaserTTM"><input className="LaserTTM" /></td>
                        <td className="LaserTOpera"><input className="LaserTOpera" /></td>
                    </tr>


                    <tr className="Buffing">
                        <th>Buffing</th>
                        <td className="BuffingProd"><input className="BuffingProd" /></td>
                        <td className="BuffingWip"><input className="BuffingWip" /></td>
                        <td className="BuffingTM"><input className="BuffingTM" /></td>
                        <td className="BuffingOpera"><input className="BuffingOpera" /></td>
                    </tr>

                    <tr className="QC&wash">
                        <th>QC&wash</th>
                        <td className="QC&washProd"><input className="QCProd" /></td>
                        <td className="QC&washWip"><input className="QChWip" /></td>
                        <td className="QC&washTM"><input className="QCTM" /></td>
                        <td className="QC&washOpera"><input className="QCOpera" /></td>
                    </tr>


                    <tr className="BagandBox">
                        <th>Bag and Box</th>
                        <td className="BagandBoxProd"><input className='BagandBoxProd' /></td>
                        <td className="BagandBoxhWip"><input className="BagandBoxhWip" /></td>
                        <td className="BagandBoxTM"><input className="BagandBoxTM" /></td>
                        <td className="BagandBoxOpera"><input className="BagandBoxOpera" /></td>
                    </tr>

                </table>

                <button className="send">Enviar</button>
            </form>
        </div>
    )
}

export default TableReport;