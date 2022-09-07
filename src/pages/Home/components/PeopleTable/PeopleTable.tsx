import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PAGE_SIZE = 5;

const PeopleTable = () => {

  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const dispatch = useDispatch();
  const people = useSelector((store: AppStore) => store.people);
  const favorites = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) => favorites.some(p => p.id === person.id);
  const filterPerson = (person: Person) => favorites.filter(p => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople))
    setSelectedPeople(filteredPeople);
  }
  
  const columns = [
    {
      field: 'actions',
      headerName: '',
      type: 'actions',
      sortable: false,
      widtth: 50,
      renderCell: (params: GridRenderCellParams) => 
      (<><Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} /></>)
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

  useEffect(() => {
    setSelectedPeople(favorites);
  }, [favorites])

  return (
    <DataGrid
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={PAGE_SIZE}
      rowsPerPageOptions={[PAGE_SIZE]}
      rows={people}
      columns={columns}
      getRowId={(row: any) => row.id}
    />
  )
}

export default PeopleTable