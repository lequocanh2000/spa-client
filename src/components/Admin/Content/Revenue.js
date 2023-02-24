import '../../../assets/css/Admin/Revenue.css'
import {useState, useEffect} from 'react'
import Axios from 'axios'
function Revenue(){


    const [year,setyear] = useState('')
    const [listYear, setlistYear] = useState([]);
    const [listRevenue,setlistRevenue] = useState([])
    const [totalRevenueYear,settotalRevenueYear] = useState('')
    const [showList, setshowList] = useState(false);

    // console.log(year)

    useEffect(()=>{
        //Lấy năm lớn nhất (gần nhất) trong danh sách các hóa đơn
        Axios.get(`http://localhost:3001/MaxYear`).then((response)=>{
            console.log(response)
            const nam = response.data[0].Nam
            console.log('year useeffect 1',nam)
            setyear(nam)
        })
        console.log('useEffect 1')
    },[])

    useEffect(()=>{
        //Lấy danh sách năm trong bảng HoaDon
        Axios.get(`http://localhost:3001/ListYear`).then((response)=>{
            console.log(response)
            setlistYear(response.data)
        })

        //Lấy danh sách doanh thu gồm (tháng trong năm = year, tổng số hóa đơn trong từng tháng có năm = year, tổng doanh thu từng tháng có năm = year)
        Axios.get(`http://localhost:3001/ListRevenue/${year}`).then((response)=>{
            console.log(response)
            setlistRevenue(response.data)
        })

        //Tính tổng doanh thu có năm = year
        Axios.get(`http://localhost:3001/TotalRevenue/${year}`).then((response)=>{
            console.log(response)
            const totalRevenue = response.data[0]
            console.log(typeof +totalRevenue.TongDoanhThu)
            settotalRevenueYear(+totalRevenue.TongDoanhThu)
        })

        console.log('useEffect 2')
    },[year])

    return (
        <div className="card-table" style={{position: 'relative'}}>
            <div className="card-table__heading">
                <h3 className="card-table__heading-title">Doanh thu</h3>
                <div className="card-table__heading-year-revenue">
                    <label className="card-table__heading-year-revenue-label" htmlFor="DoanhThuNam">Chọn năm</label>
                    <select className="card-table__heading-year-revenue-select" name="DoanhThuNam" id="DoanhThuNam"
                        value={year}
                        onChange={(e)=>{
                            setyear(e.target.value)
                            console.log("set year")
                        }}
                    >
                    {listYear.map((year,index)=>{
                        return (
                            <option key={index} value={year.Nam}>{year.Nam}</option>
                        )
                    })}
                    </select>
                </div> 
            </div>
            <div className="card-table__content">
                <table className="card-table__content-table">
                    <thead className="card-table__content-heading">
                        <tr>
                            <th className="card-table__content-title">Tháng</th>
                            <th className="card-table__content-title">Tổng số hóa đơn</th>
                            <th className="card-table__content-title">Doanh thu tháng</th>                           
                        </tr>
                    </thead>
                    <tbody className="card-table__content-body">
                      {listRevenue.map((revenue,index)=>{
                          return (
                            <tr key={index}>
                                <td>{revenue.Thang}</td>
                                <td>{revenue.TongHoaDonTrongThang}</td>
                                <td>{(+revenue.TongTien).toLocaleString()} đ</td>
                            </tr>
                          )
                      })}
                    </tbody>
                </table>
            </div>
            <div className="card-table__total-revenue">
                <label className="card-table__total-revenue-text">Tổng doanh thu năm {year}: </label>
                <label className="card-table__total-revenue-number">{totalRevenueYear.toLocaleString()} đ</label>
            </div>
        </div>
    )
}

export default Revenue