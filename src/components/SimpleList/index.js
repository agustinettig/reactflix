import styled from 'styled-components';

export const ListWrapper = styled.ul`
    list-style-type: none;
    display: contents;
    margin-left: 20px;
    margin-right: 20px;
`;

export const ListItem = styled.li`
    color: var(--white);
    background-color: #353535;
    border-radius: 5px;
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 5px;
    padding: 5px;
    padding-left: 20px;

    &:hover {
        background-color: #1a1a1a;
    }
`;
