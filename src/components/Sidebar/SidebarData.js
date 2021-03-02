import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Tech Stack Notes:'
    },

    {
        title: 'Python',
        path: '/python',
        icon: <FaIcons.FaPython />,
        subNav: [
            {
                title: 'Functions',
                path: '/python/functions',
            },
            {
                title: 'Classes',
                path: '/python/classes',
            },
        ]
    }


]