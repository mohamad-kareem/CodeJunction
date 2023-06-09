import React, { useState, useEffect } from 'react';
import './rankingtable.css';
import Widget from '../Widget/Widget';
import PersonIcon from '@mui/icons-material/Person';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import axios from 'axios';
import { DataGrid, } from '@mui/x-data-grid';
import imaage from '../../assets/empty-pic.jpg';

const columns = [

  { field: 'id', headerName: 'Rank', width:190, valueGetter: (params) =>'#' +params.row.rank  },
  { field: 'username', headerName: 'Username', width:400,renderCell:(params)=>{
    return(
      <div className="userImage">
        {params.row.imageUrl ? (
          <img src={params.row.imageUrl} alt={params.row.username} className='user-image' />
        ) : (
          <img src={imaage} alt="empty" className='user-image' />
        )}
        {params.row.username}
      </div>
    )
  } },
  { field: 'email', headerName: 'Email', width:280 },
  { field: 'points', headerName: 'Points', width:150 },
];
columns.forEach((col) => (col.headerClassName = "my-column"));

const RankingTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/allusers')
      .then((response) => {
        const usersWithRank = response.data.map((user, index) => ({ ...user, rank: index + 1 }));
        setUsers(usersWithRank);
        console.log(usersWithRank)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="table-wrapper">
      <div className="widgets-container">
        <Widget title="Python Users" activeUsers={1234} widgetLink="Active coders" percentage="75%" icon={PersonIcon} />
        <Widget title="Boost your skills" activeUsers="Asyncio" widgetLink="Boost your skills" icon={ScoreboardIcon} />
        <Widget title="Python Rank" activeUsers="#3" widgetLink="Future view" icon={MilitaryTechIcon} />
      </div>
      <div className="all-users">
        <div className='datatable'>
          <DataGrid
            rows={users}
            columns={columns}
            getRowId={(row) => row.rank}
            rowHeight={70}
            autoHeight
            getRowClassName={() => "custom-row-class"}
            getRowSpacing={params=>({
              top:5,
              bottom:params.isLastVisible ? 0: 5
            })}
            sx={{
              boxShadow: 8,
              border: 0,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'yellow',
              },
            }}
          />
      </div>
    </div>
  </div>
  );
};

export default RankingTable;
