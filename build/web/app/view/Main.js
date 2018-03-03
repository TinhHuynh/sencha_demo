
Ext.define('SenchaDemo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Password',
        'Ext.MessageBox',
        'Ext.field.Radio'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Insert',
                iconCls: 'add',
                // styleHtmlContent: true,
                // scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Insert new account'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Username: ',
                        id: 'username'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password: ',
                        id: "password"
                    },
                    {
                        xtype: 'textfield',
                        label: 'Fullname: ',
                        id: 'fullname'
                    },
                    {

                        xtype: 'fieldset',
                        title: 'Role :',
                        items: [
                            {
                                xtype: 'radiofield',
                                label: 'Admin',
                                name: 'role',
                                value: 'Admin',
                                checked: true
                            },
                            {
                                xtype: 'radiofield',
                                label: 'User',
                                name: 'role',
                                value: 'User'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        ui: 'normal',
                        text: 'Insert',
                        handler: function () {

                            var username = Ext.getCmp('username').getValue();
                            var password = Ext.getCmp('password').getValue();
                            var fullname = Ext.getCmp('fullname').getValue();
                            var role = Ext.ComponentQuery.query('radiofield[name=role]')[0].getGroupValue();
                            Ext.Ajax.request(
                                    {
                                        url: 'http://192.168.2.104:8084/SenchaDemo/InsertServlet',
                                        params: {
                                            username: username,
                                            password: password,
                                            fullname: fullname,
                                            role: role
                                        },
                                        methods: 'GET',
                                        success: function (response, opts) {
                                            Ext.Msg.alert("Inserted");
                                        },
                                        failure: function (response, opts) {
                                            Ext.Msg.alert("Failed to insert. Please try again");
                                        }
                                    }
                            );
                        }
                    }
                ]

            }
        ]
    }
});
