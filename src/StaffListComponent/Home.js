import React, { Component } from 'react';
import PhongBan from "./PhongBan";
import NhanVien from "./NhanVien";
import BangLuong from "./BangLuong";
import ChiTietNhanVien from "./ChiTietNhanVien";
import Header from "./Header";
import Footer from './Footer';
import DepartStaff from "./DepartStaff";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNhanVien, fetchPhongBan, fetchBangLuong } from './redux/ActionCreators';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsSalary: state.staffsSalary
}};

const mapDispatchToProps = dispatch => ({
    fetchNhanVien: () => {dispatch(fetchNhanVien())},
    fetchPhongBan: () => {dispatch(fetchPhongBan())},
    fetchBangLuong: () => {dispatch(fetchBangLuong())},
});

class Home extends Component {

    componentDidMount() {
        this.props.fetchNhanVien();
        this.props.fetchPhongBan();
        this.props.fetchBangLuong();
    }

    render() {
        const StaffWithId = ({match}) => {
            return(
                <ChiTietNhanVien staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]}
                    department={this.props.departments.departments} 
                    isLoading= {this.props.staffs.isLoading}
                    errMess= {this.props.staffs.errMess}
            />)}

        const DepartWithId = ({match}) => {
            return (
              <DepartStaff
                dept={
                  this.props.departments.departments.filter(
                    (dept) => dept.id === match.params.deptId
                  )[0]
                }
                staff={this.props.staffs.staffs.filter(
                  (staff) => staff.departmentId === match.params.deptId
                )}
              />
            );}
        
        return(
            <div>
                <Header />
                        <Switch location={this.props.location}>
                            <Route exact path="/staffs" component={() => <NhanVien staffs={this.props.staffs} /> } />
                            <Route path="/staffs/:staffId" component={StaffWithId} />
                            <Route exact path="/departments" component={() => <PhongBan departments={this.props.departments} /> } />
                            <Route path='/departments/:deptId' component={DepartWithId} />
                            <Route exact path="/payroll" component={() => <BangLuong staffs={this.props.staffs} /> } />
                            <Redirect to='/staffs' />
                        </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));