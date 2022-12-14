import classes from "./Main.module.css";

const Main = () =>{
    return(
        <div className={classes.user}>
            <div className={classes.user_box}>
                <div className={classes.user_avatar}>
                    <img className={classes.edit_icon} src="/edit_FILL0_wght400_GRAD0_opsz48 2.png" />
                </div>
                <div className={classes.user_info}>
                    <p>Name:</p>
                    <p>Surname:</p>
                    <p>Birthday:</p>
                    <p>Country:</p>
                    <p>Email:</p>
                </div>
            </div>
            <div className={classes.username}>
                <p>Username</p>
                <img className={classes.edit_username} src="/edit_FILL0_wght400_GRAD0_opsz48 2.png" />
            </div>
            <div className={classes.btns}>
                <button>Edit Profile</button>
                <button>Change Password</button>
                <button>Add Credit Card</button>
                <button>Deactivate Account</button>
            </div>
            <button className={classes.leave_btn}>Leave</button>
        </div>
    );
}

export default Main