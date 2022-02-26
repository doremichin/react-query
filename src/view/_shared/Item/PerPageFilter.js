import styled from 'styled-components'

const PerPageFilter = ({setPerPage,perPage}) => {
    const handleChange = (e) => {
        setPerPage(Number(e.target.value));
    }
    return(
        <Select
            type={'number'}
            value={perPage}
            onChange={handleChange}
        >
            <Option value={'10'}>10</Option>
            <Option value={'20'}>20</Option>
            <Option value={'30'}>30</Option>
        </Select>
    )
};

const Select = styled.select`
    width: 80px;
  height: 30px;
  font-size: 16px;
`;
const Option = styled.option`
`;

export default PerPageFilter;
