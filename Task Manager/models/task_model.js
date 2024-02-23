
module.exports=(sequelize,DataTypes) =>{
    const task=sequelize.define('tasks',{
        task_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        task_name:{
            type:DataTypes.STRING(100),
            allownull:false
        },
        description:{
            type:DataTypes.STRING(200)
        },
        is_completed:{
            type:DataTypes.BOOLEAN
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
    return task
}