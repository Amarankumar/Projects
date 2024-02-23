
module.exports=(sequelize,DataTypes) =>{
    const user=sequelize.define('users',{
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        password:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        mobile:{
            type:DataTypes.STRING(10),
            allowNull:false
        },
        email:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },{
        timestamps: true, 
        updatedAt: 'updated_at', 
        createdAt: 'created_at'
        
    })
    return user;
}