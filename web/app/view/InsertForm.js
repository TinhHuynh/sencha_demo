/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaDemo.view.InsertForm', {
    extend: 'Ext.Panel',
    alias: 'widget.insertform',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Password',
        'Ext.MessageBox',
        'Ext.field.Radio'
    ],
    config: {
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
                id: 'loginButton'
            }
        ]
    }
});
