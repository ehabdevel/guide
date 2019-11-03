(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{231:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"making-software-citable"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#making-software-citable"}},[e._v("#")]),e._v(" Making software citable")]),e._v(" "),o("p",[e._v("Digital Object Identifiers are globally unique identifiers which can point to\nany digital object, such as a version of a paper, a version of software etc.\nThis has the advantage that it is unambigous and standardized. For papers, using\nDOIs is commonplace, and a DOI is usually provided by the publisher. For\nsoftware, you can make your own DOI with "),o("a",{attrs:{href:"https://zenodo.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zenodo"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("You can tell people how to cite your software by including a "),o("code",[e._v("CITATION.cff")]),e._v("\nfile in the root of your repository (You can read up on the rationale of\n"),o("code",[e._v("CITATION.cff")]),e._v(" files in "),o("a",{attrs:{href:"https://www.software.ac.uk/blog/2017-12-12-standard-format-citation-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("this\nblog"),o("OutboundLink")],1),e._v(").\nHowever, writing "),o("code",[e._v("CITATION.cff")]),e._v(" files by hand is a bit tedious and\nerror-prone, so instead go to\nhttps://citation-file-format.github.io/cff-initializer-javascript/ and fill in\nthe provided web form.")])]),e._v(" "),o("li",[o("p",[e._v("Make a "),o("a",{attrs:{href:"https://zenodo.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zenodo"),o("OutboundLink")],1),e._v(" account and link it with your GitHub account as explained on "),o("a",{attrs:{href:"https://guides.github.com/activities/citable-code/",target:"_blank",rel:"noopener noreferrer"}},[e._v("guides.github.com/activities/citable-code"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("You can tell Zenodo what metadata you want to associate with the software by\nincluding a "),o("code",[e._v(".zenodo.json")]),e._v(" file in the root of your repository, but writing\nthat file by hand is also error-prone. Therefore it is advisable to just generate it\nfrom the "),o("code",[e._v("CITATION.cff")]),e._v(" file. To do so, you'll need a command line tool\n"),o("code",[e._v("cffconvert")]),e._v(" which you can install "),o("a",{attrs:{href:"https://pypi.org/project/cffconvert/",target:"_blank",rel:"noopener noreferrer"}},[e._v("from\nPyPI"),o("OutboundLink")],1),e._v(" by:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("pip "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --user cffconvert\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Make sure that your "),o("code",[e._v("CITATION.cff")]),e._v(" is valid YAML by copy-pasting the\ncontents to http://www.yamllint.com/.")])]),e._v(" "),o("li",[o("p",[e._v("Make sure that your "),o("code",[e._v("CITATION.cff")]),e._v(" is valid CFF, by:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# (in the repository's root directory)")]),e._v("\ncffconvert --validate\n")])])]),o("p",[e._v("If the command does not return anything, that means the CFF is valid.")])]),e._v(" "),o("li",[o("p",[e._v("Generate the "),o("code",[e._v(".zenodo.json")]),e._v(" file using "),o("code",[e._v("cffconvert")]),e._v(" as follows:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("cffconvert --ignore-suspect-keys --outputformat zenodo --outfile .zenodo.json\n")])])])]),e._v(" "),o("li",[o("p",[e._v("On Zenodo, make sure to 'Flip the switch' to the "),o("code",[e._v("on")]),e._v(" position on the\nGitHub repository that you want to make a release of.")])]),e._v(" "),o("li",[o("p",[e._v("Go to your Github repository, use the "),o("em",[e._v("Create a new release")]),e._v(" button to create\na release on GitHub.")])]),e._v(" "),o("li",[o("p",[e._v("Zenodo should automatically be notified and should make a snapshot copy of\nthe current state of your repository (just one branch, without any history), and\nshould also assign a persistent identifier (DOI) to that snapshot.")]),e._v(" "),o("p",[o("strong",[e._v("when things don't work")])]),e._v(" "),o("p",[e._v("In case the GitHub-Zenodo integration does not work as expected, there are\ntwo places to go and look for information:")]),e._v(" "),o("ol",[o("li",[e._v("On GitHub:\n"),o("ul",[o("li",[e._v("go to "),o("code",[e._v("https://github.com/<org>/<repo>/")])]),e._v(" "),o("li",[e._v("select "),o("code",[e._v("Settings")])]),e._v(" "),o("li",[e._v("select "),o("code",[e._v("Webhooks")])]),e._v(" "),o("li",[e._v("select select the Zenodo webhook (may require GitHub login)")]),e._v(" "),o("li",[e._v("scroll down to "),o("code",[e._v("Recent deliveries")])]),e._v(" "),o("li",[e._v("click on one of the listed deliveries for details on the request, the response, and to request redelivery.")])])]),e._v(" "),o("li",[e._v("On Zenodo:\n"),o("ul",[o("li",[e._v("go to "),o("code",[e._v("https://zenodo.org/account/settings/github/")])]),e._v(" "),o("li",[e._v("select the repository that you want to see the diagnostic information of")]),e._v(" "),o("li",[e._v("click on one of the releases to see the "),o("em",[e._v("Payload")]),e._v(" Zenodo received from GitHub, as well as the "),o("em",[e._v("Metadata")]),e._v(" that Zenodo has associated with your release, or "),o("em",[e._v("Errors")]),e._v(" if there were any.")])])])])]),e._v(" "),o("li",[o("p",[e._v("Use the DOI whenever you refer to your software, be it in papers, posters, or\neven tweets and blogs.")])]),e._v(" "),o("li",[o("p",[e._v("Add the software's Zenodo badge to your repository's README.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);