import React from 'react'
import DataTable from 'react-data-table-component'

class Table extends React.Component {
    constructor(props) {    
        super(props)

        this.state = {
            filter: '',
            tblData: this.props.tblData || []
        }
    }

    filter = (e) => {
        console.log('eventtttt', e.target.value, )
        let newData = this.props.tblData.filter((item)=>{
            for (let key in item) {
                let v = item[key] && item[key].toString().toLowerCase();
                if (v && v.indexOf(e.target.value.toLowerCase()) !== -1 ) {
                    return true;
                }
            }
            return false;
        });
        console.log('===========new data', newData)
        this.setState({
            filter: e.target.value,
            tblData: newData
        });
    }

    render() {
        
      console.log('this props', this.state)
        const columns = [
            {
              name: 'Name',
              selector: 'name',
              sortable: true,
              grow: 2,
            },
            {
              name: 'id',
              selector: 'id',
              sortable: true,
            },
            {
                name: 'registered',
                selector: 'registered',
                sortable: true,
              },
              {
                name: 'role',
                selector: 'role',
                sortable: true,
              },
              {
                name: 'status',
                selector: 'status',
                sortable: true,
              },
            
          ];
        return (
            <div>
                <div className="search-box">
                    Search: <input className="search" type="text" name="" value={this.state.filter} placeholder="Filter Result" onChange={this.filter} />
                </div>
                <DataTable
                title="Datatable"
                columns={columns}
                data={this.state.tblData}
                highlightOnHover
                defaultSortField="name"
                pagination
                />
            </div>
        )
    }
}

export default Table;