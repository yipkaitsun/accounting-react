import { TransactionContainer } from "./transaction_container"
import { UserContainer } from "./users_container"

export const HomePage = () => {
    return <div style={{ display: 'flex' }}>
        <div style={{ width: "30%", height: '300px' }}> <UserContainer /></div>
        <div style={{ width: "70%", height: '300px' }}> <TransactionContainer /></div>
    </div>
}
