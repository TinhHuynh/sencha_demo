/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaDemo.controller.InsertForm', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginButton: '#loginButton'
        },
        control: {
            loginButton: {
                tap: 'onSubmitLogin'
            }
        }
    },

    onSubmitLogin: function (button) {
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
                    methods: 'POST',
                    success: function (response, opts) {
                        Ext.Msg.alert("", "Inserted");
                        Ext.getCmp('username').setValue("");
                        Ext.getCmp('password').setValue("");
                        Ext.getCmp('fullname').setValue("");
                    },
                    failure: function (response, opts) {
                        Ext.Msg.alert("", "Failed to insert. Please try again");
                    }
                }
        );
    }

});


