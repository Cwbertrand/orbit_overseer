import styled from "styled-components/native";

export const ListUserBloc = styled.View `
    flex: 1;
    width: 80%;
    height: auto;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(33, 33, 33, 0.9);
    border: black 1px;
`;

export const Item = styled.View `
    padding: 10px 0;
    padding: 10px;
    borderBottomWidth: 1px;
    borderBottomColor: #ccc;
    display: flex;
    flex-direction: row;
    align-item: space-between;
    justify-content: space-between;
`;

export const ItemText = styled.Text `
    font-size: 20px;
    color: white;
    font-weight: bold;
`; 