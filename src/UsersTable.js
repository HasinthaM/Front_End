import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = props => {  //can write this also - const UsersTable = ({rows}) , in 16 row props should remove
    return(

      <TableContainer component={Paper}>
        <Table>
            <TableHead>
              <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                  props.rows.length > 0? props.rows.map(row => (
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border: 0}}}>
                      <TableCell component='th' scope="row">{row.id}</TableCell>
                      <TableCell component='th' scope="row">{row.name}</TableCell>
                      <TableCell >
                        <Button
                          sx={{margin: '0px 10px'}}
                          onClick={() => {}}
                        >
                          update

                        </Button>

                        <Button
                          sx={{margin: '0px 10px'}}
                          onClick={() => {}}
                        >
                          delete

                        </Button>
                      </TableCell>
                    </TableRow>
                      
                  )) : (
                    <TableRow sx={{'&:last-child td, &:last-child th' : {border: 0}}}>
                      <TableCell component='th' scope="row">No Data</TableCell>
                    </TableRow>
                  )
                }
            </TableBody>
        </Table>
    </TableContainer>


    )
    

}

export default UsersTable;