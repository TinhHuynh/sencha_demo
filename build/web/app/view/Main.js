Ext.define('Animal', {
    config: {
        name: null
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    speak: function () {
        alert('grunt');
    }
});

Ext.define('SenchaDemo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Password',
        'Ext.MessageBox'
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
                        xtype: 'textfield',
                        label: 'Role: ',
                        id: 'role'
                    },

                    {
                        xtype: 'button',
                        ui: 'normal',
                        text: 'Insert',

                        handler: function () {

                            var username = Ext.getCmp('username').getValue();
                            var password = Ext.getCmp('password').getValue();
                            var fullname = Ext.getCmp('fullname').getValue();
                            var role = Ext.getCmp('role').getValue();
                            Ext.Ajax.request(
                                    {
                                        url: 'http://192.168.2.104:8084/SenchaDemo/LoginServlet',
                                        params: {
                                            username: username,
                                            password: password,
                                            fullname: fullname,
                                            role: role
                                        },
                                        methods: 'GET',
                                        success: function (response, opts) {
//                                            window.location.reload();
                                            var loginResult = Ext.JSON.decode(response.responseText.trim());
                                            if (loginResult.role === "Admin") {
                                                Ext.Msg.alert("Login successfully. Hello " + loginResult.username);
                                            } else {
                                                Ext.Msg.alert("Only admin is allowed to\n use this app");
                                            }
                                        },
                                        failure: function (response, opts) {
                                            Ext.Msg.alert("Invalid username or password. Please try again");
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
