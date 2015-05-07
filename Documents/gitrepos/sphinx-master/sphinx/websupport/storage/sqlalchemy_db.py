{#
    default/layout.html
    ~~~~~~~~~~~~~~~~~~~

    Sphinx layout template for the default theme.

    :copyright: Copyright 2007-2015 by the Sphinx team, see AUTHORS.
    :license: BSD, see LICENSE for details.
#}
{%- extends "basic/layout.html" %}

{% if theme_collapsiblesidebar|tobool %}
{% set script_files = script_files + ['_static/sidebar.js'] %}
{% endif %}