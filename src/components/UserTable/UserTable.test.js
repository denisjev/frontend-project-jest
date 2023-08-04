import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import UserTable from './UserTable'

describe('UserTable component test', () => {
    
    const usersData = [{"gender":"female","name":{"title":"Mrs","first":"Sanjana","last":"Sheikh"},"location":{"street":{"number":7355,"name":"Rani No Hajiro"},"city":"Sambhal","state":"Uttarakhand","country":"India","postcode":92320,"coordinates":{"latitude":"6.9581","longitude":"99.7455"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"sanjana.sheikh@example.com","login":{"uuid":"bd9dbbdf-ef65-4905-bf51-a6e3c7d4c4be","username":"beautifulostrich492","password":"exodus","salt":"7yuMawE7","md5":"1e5e9ecf3ed41c82a0f8f7c45e7d3809","sha1":"7740332629dbd6f104c8de81d20b3983a635ae20","sha256":"0ebe4c5d1a0f29da710939333bf51b8a2d89def3393551b3a62638dd127f5e42"},"dob":{"date":"1996-06-22T04:34:20.810Z","age":27},"registered":{"date":"2006-05-07T13:41:10.506Z","age":17},"phone":"8828278127","cell":"9031556553","id":{"name":"UIDAI","value":"022725301103"},"picture":{"large":"https://randomuser.me/api/portraits/women/76.jpg","medium":"https://randomuser.me/api/portraits/med/women/76.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/76.jpg"},"nat":"IN"}]
    
    let component = null

    beforeEach(() => {
        component = render(
            <UserTable users={usersData} />,
        );
    })

    it('render data from props', () => {
        component.getByText('Mrs Sanjana Sheikh')
    })

    it('function Colorear', () => {
        
        const buttonColorear = component.getByText('Colorear')
        fireEvent.click(buttonColorear)
        const userTableRendered = component.container.getElementsByTagName('table')[0]
        expect(userTableRendered).toHaveClass('striped-table')
    })
})