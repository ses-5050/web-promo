import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Sidebar from '../../components/Sidebar';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Ins', 'FB', 'YT', 'TW', 'TK', 'WS', 'UV', 'REF'],
                datasets: [
                    {
                        label: 'Successful',
                        data: [12, 19, 3, 5, 2, 3, 5, 4],
                        backgroundColor: 'rgb(245, 202, 63)',
                    },
                    {
                        label: 'Pending',
                        data: [2, 3, 20, 5, 1, 4, 8, 6],
                        backgroundColor: 'rgb(18, 197, 153)',
                    },

                ],


            },
            chartDatadoughnut: {
                labels: ['Instagram', 'Facebook', 'YouTube', 'Twitter', 'TikTok'],
                datasets: [
                    {

                        data: [12, 19, 3, 5, 2,],
                        backgroundColor: [
                            '#072448',
                            '#54d2d2',
                            '#ffcb00"',
                            '#ff6150',
                            '#f8aa4b',

                        ],
                        borderColor: [
                            '#072448',
                            '#54d2d2',
                            '#ffcb00"',
                            '#ff6150',
                            '#f8aa4b',
                        ],
                        borderWidth: 1,
                    },
                ],


            }, Linechart3: {
                labels: ['Jun', 'Feb', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                datasets: [
                    {
                        label: 'No Of Users',
                        data: [12, 19, 3, 5, 2, 3, 20, 4, 35, 52, 12, 14],
                        fill: false,
                        backgroundColor: '#ffe227',
                        borderColor: '#822659',
                    },
                ],


            }, Barchart4: {
                labels: ['Ins', 'FB', 'YT', 'TW', 'TK', 'WS', 'UV', 'REF'],
                datasets: [
                    {
                        label: '',
                        data: [12, 19, 3, 5, 2, 3, 1, 4],
                        backgroundColor: 'rgb(245, 202, 63)',
                        backgroundColor: 'rgb(242, 202, 63)',
                        backgroundColor: 'rgb(245, 208, 63)',
                        backgroundColor: 'rgb(245, 202, 63)',
                    },


                ],


            },


        }
    }








    render() {

        return (
            <div>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <title>Dashboard</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" type="text/css" href="/assetsadmin/css/css/util1.css" />
                    <link rel="stylesheet" type="text/css" href="/assetsadmin/css/css/main1.css" />
                    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />

                    <link rel="stylesheet" href="/assetsadmin/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/themify-icons.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/metisMenu.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/slicknav.min.css" />


                    <link rel="stylesheet" href="/assetsadmin/css/typography.css" />

                    <link rel="stylesheet" href="/assetsadmin/css/styles.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/responsive.css" />
                    <script src="/assetsadmin/js/vendor/modernizr-2.8.3.min.js"></script>

                    <script src="/assetsadmin/js/vendor/jquery-2.2.4.min.js"></script>
                    <script src="/assetsadmin/js/popper.min.js"></script>
                    <script src="/assetsadmin/js/bootstrap.min.js"></script>
                    <script src="/assetsadmin/js/owl.carousel.min.js"></script>
                    <script src="/assetsadmin/js/metisMenu.min.js"></script>
                    <script src="/assetsadmin/js/jquery.slimscroll.min.js"></script>
                    <script src="/assetsadmin/js/jquery.slicknav.min.js"></script>


                    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
                    <script src="https://code.highcharts.com/highcharts.js"></script>
                    <script src="https://code.highcharts.com/modules/exporting.js"></script>
                    <script src="https://code.highcharts.com/modules/export-data.js"></script>

                    <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
                    <script src="https://www.amcharts.com/lib/3/maps/js/worldLow.js"></script>


                    <script src="/assetsadmin/js/maps.js"></script>








                    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css" />
                    <link rel="stylesheet" type="text/css"
                        href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css"
                        href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.jqueryui.min.css" />



                </Helmet>
                <Sidebar />

                <div id="preloader">
                    <div className="loader"></div>
                </div>
                { /* <!-- preloader area end -->
    <!-- page container area start -->*/}
                <div className="page-container">


                    {/* <!-- main content area start --> */}
                    <div className="main-content">
                        {/* <!-- header area start --> */}
                        <div className="header-area">
                            <div className="row align-items-center">
                                {/* <!-- nav and search button --> */}
                                <div className="col-md-6 col-sm-8 clearfix">

                                    <div className="search-box pull-left">
                                        <form action="#">
                                            <input type="text" name="search" placeholder="Search..." required />
                                            <i className="ti-search"></i>
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- profile info & task notification --> */}

                            </div>
                        </div>
                        {/* <!-- header area end -->
            <!-- page title area start --> */}
                        <div className="page-title-area">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <div className="breadcrumbs-area clearfix">
                                        <h4 className="page-title pull-left">Dashboard</h4>
                                        <ul className="breadcrumbs pull-left">

                                            <li> <Link to="/admindash" > <a >Home</a> </Link></li>
                                            <li><span>Dashboard</span></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- page title area end --> */}

                        <div className="main-content-inner">
                            <div className="row">
                                {/* <!-- seo fact area start --> */}
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-md-6 mt-5 mb-3">
                                            <div className="card">
                                                <div className="seo-fact sbg1">
                                                    <div className="p-4 d-flex justify-content-between align-items-center">
                                                        <div className="seofct-icon"><i className="ti-user"></i> Total Users</div>
                                                        <h2>2,315</h2>
                                                    </div>
                                                    <canvas id="seolinechart1" height="50"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-md-5 mb-3">
                                            <div className="card">
                                                <div className="seo-fact sbg2">
                                                    <div className="p-4 d-flex justify-content-between align-items-center">
                                                        <div className="seofct-icon"><i className="ti-money"></i> Total Earning</div>
                                                        <h2>3,984</h2>
                                                    </div>
                                                    <canvas id="seolinechart2" height="50"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3 mb-lg-0">
                                            <div className="card">
                                                <div className="seo-fact sbg3">
                                                    <div className="p-4 d-flex justify-content-between align-items-center">
                                                        <div className="seofct-icon">Impressions</div>
                                                        <canvas id="seolinechart3" height="60"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- <div className="col-md-6">
                                <div className="card">
                                    <div className="seo-fact sbg4">
                                        <div className="p-4 d-flex justify-content-between align-items-center">
                                            <div className="seofct-icon">New Users</div>
                                            <canvas id="seolinechart4" height="60"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div> --> */}
                                    </div>
                                </div>
                                {/* <!-- seo fact area end -->
                    <!-- Social Campain area start --> */}
                                <div className="col-lg-4 mt-5">
                                    <div className="card">
                                        <div className="card-body pb-0">
                                            <h4 className="header-title">Payment Status</h4>
                                            <div id="socialads" style={{ height: "245px" }}>
                                                <Bar
                                                    data={this.state.chartData}
                                                    options={{


                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Social Campain area end -->
                    <!-- Statistics area start --> */}
                                <div className="col-lg-8 mt-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="header-title">User Statistics</h4>
                                            <div id="user-statistics">
                                                <Line
                                                    data={this.state.Linechart3}

                                                    options={{

                                                        scales: {
                                                            yAxes: [
                                                                {
                                                                    ticks: {
                                                                        beginAtZero: false,
                                                                    },
                                                                },
                                                            ],
                                                        },

                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Statistics area end -->
                    <!-- Advertising area start --> */}
                                <div className="col-lg-4 mt-5">
                                    <div className="card h-full">
                                        <div className="card-body">
                                            <h4 className="header-title">Order Impressions</h4>
                                            <Doughnut
                                                data={this.state.chartDatadoughnut}
                                                options={{


                                                }}
                                            />

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Advertising area end --> */}
                                <div className="col-lg-6 mt-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="header-title">Earning Impressions</h4>
                                            <pre className="tab">Instagram-Ins | Facebook-FB | YoutubeYT | Twitter-TW</pre>
                                            <pre className="tab">TikTok-TK | Watch Video -WS | Upload Video-UV | Referrals-Ref</pre>

                                            <div id="ambarchart5"><Bar
                                                data={this.state.Barchart4}

                                                options={{



                                                }}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* <!-- product sold area start --> */}
                                <div className="col-xl-8 col-lg-7 col-md-12 mt-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between mb-4">
                                                <h4 className="header-title mb-0">Top Users</h4>
                                                <select className="custome-select border-0 pr-3">
                                                    <option selected="">Today</option>
                                                    <option value="0">Last 7 Days</option>
                                                </select>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="dbkit-table">
                                                    <tbody>
                                                        <tr className="heading-td">
                                                            <td>Name</td>
                                                            <td>Email</td>
                                                            <td>Point</td>

                                                        </tr>
                                                        <tr>
                                                            <td>Praveen</td>
                                                            <td>hello@gmail.com</td>
                                                            <td>500</td>

                                                        </tr>
                                                        <tr>
                                                            <td>Stasme</td>
                                                            <td>Stasme@gmail.com</td>
                                                            <td>1500</td>

                                                        </tr>

                                                        <tr>
                                                            <td>Stasme</td>
                                                            <td>Stasme@gmail.com</td>
                                                            <td>1500</td>

                                                        </tr>

                                                        <tr>
                                                            <td>Stasme</td>
                                                            <td>Stasme@gmail.com</td>
                                                            <td>1500</td>

                                                        </tr>

                                                        <tr>
                                                            <td>Stasme</td>
                                                            <td>Stasme@gmail.com</td>
                                                            <td>1500</td>

                                                        </tr>

                                                        <tr>
                                                            <td>Stasme</td>
                                                            <td>Stasme@gmail.com</td>
                                                            <td>1500</td>

                                                        </tr>




                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- product sold area end --> */}



                                {/* <!-- map area start --> */}
                                <div className="col-xl-5 col-lg-12 mt-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="header-title">Marketing Area</h4>
                                            <div id="seomap"></div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* <!-- main content area end -->
        <!-- footer area start--> */}

                </div>
                {/* <!-- page container area end -->
    <!-- offset area start --> */}






            </div>
        )
    }
}

export default Dashboard