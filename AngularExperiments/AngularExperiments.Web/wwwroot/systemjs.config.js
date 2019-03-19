(function () {
    System.config({
        paths: {
            'npm:': '/node_modules/'
        },
        map: {
            'app': '/src/app',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            'rxjs': 'npm:rxjs',
            'loader': '/src/systemjs-angular-loader.js'
        },
        packages: {
            app: {
                main: 'main.ts',
                defaultExtension: 'ts'
            },
            rxjs: {
                defaultExtension: 'ts'
            }
        }
    });
});