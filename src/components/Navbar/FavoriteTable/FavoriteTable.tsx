import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Button, IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

const PAGE_SIZE = 5;
const FavoriteTable = () => {
  const favorites = useSelector((store: AppStore) => store.favorites);
  const dispatch = useDispatch();
  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  }

  const columns = [
    {
      field: 'actions',
      headerName: '',
      type: 'actions',
      sortable: false,
      widtth: 50,
      renderCell: (params: GridRenderCellParams) =>  (
      <>
        <Button color="warning" onClick={() => handleClick(params.row)}>Borrar</Button>
      </>)
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of happiness',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ]

  return (
    <DataGrid
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={PAGE_SIZE}
      rowsPerPageOptions={[PAGE_SIZE]}
      rows={favorites}
      columns={columns}
      getRowId={(row: any) => row.id}
    />
  )
}

export default FavoriteTable